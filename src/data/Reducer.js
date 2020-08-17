// This file contains the code that changes the state for all the actions that have
// been defined.
import Actions from './Actions';

export const INITIAL_STATE = {
  loading: false,
  error: false,
  photos: null,
  page: 1,
  pageSize: 20,
  total: 0,
  searchText: '',
  startDate: null,
  endDate: null,
  sortDirection: 'ascending',
};
export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.FETCH_PHOTO_INFO:
      return { ...state, loading: true };
    case Actions.SUCCESS_PHOTO_INFO:
      return {
        ...state,
        loading: false,
        error: false,
        photos: action.photos,
        total: action.total,
      };
    case Actions.FAIL_PHOTO_INFO: {
      return { ...state, loading: false, error: true };
    }
    case Actions.UPDATE_SEARCH_TEXT: {
      return { ...state, searchText: action.searchText };
    }
    case Actions.UPDATE_DATES: {
      let newStart = action.dates[0];
      let newEnd = action.dates.length > 1 ? action.dates[1] : null;
      let startDate = new Date(newStart.getTime());
      let endDate = newEnd === null ? null : new Date(newEnd.getTime());

      return { ...state, startDate, endDate };
    }
    case Actions.UPDATE_SORT: {
      return { ...state, sortDirection: action.sortDirection };
    }
    case Actions.UPDATE_PAGINATION: {
      // If the pageSize has changed we want to set the page number back to 1.
      let page =
        state.pageSize !== action.pageData.pageSize ? 1 : action.pageData.page;

      return { ...state, page, pageSize: action.pageData.pageSize };
    }
    case Actions.TEST_ERROR_STATE: {
      return { ...state, error: true, photos: [] };
    }

    default:
      throw new Error();
  }
};
