// This component renders the filter for the photos.
import React, { useContext } from 'react';

import {
  FormLabel,
  Search,
  DatePicker,
  DatePickerInput,
} from 'carbon-components-react';

import SortOrder from './SortOrder.js';
import AppContext from '../../data/AppContext';
import Actions from '../../data/Actions';

const Filter = () => {
  const { dispatch, state } = useContext(AppContext);

  return (
    <div className="filter__container">
      <FormLabel className="filter__label filter__item">Filter:</FormLabel>
      <Search
        className="filter__searchText  filter__item"
        labelText=""
        placeHolderText="Search photo text"
        value={state.searchText}
        onChange={evt =>
          dispatch({
            type: Actions.UPDATE_SEARCH_TEXT,
            searchText: evt.target.value,
          })
        }
      />
      <FormLabel className="filter__label filter__range_label  filter__item">
        Date Range:
      </FormLabel>
      <DatePicker
        datePickerType="range"
        className="filter__item"
        onChange={dates => dispatch({ type: Actions.UPDATE_DATES, dates })}
        value={[state.startDate, state.endDate]}>
        <DatePickerInput id="date-picker-input-id-start" labelText="" />
        <DatePickerInput id="date-picker-input-id-end" labelText="" />
      </DatePicker>
      <SortOrder className="filter__item" />
    </div>
  );
};

export default Filter;
