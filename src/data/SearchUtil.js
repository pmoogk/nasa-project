// This file contains a common search action that is used by both the header when the user
// clicks on the search button and by the footer when the user changes the pagination
// controls.
import Actions from './Actions';
import { getPhotosInfo } from '../services/PhotoService.mjs';

export async function search(dispatch, state) {
  if (!state.error) {
    dispatch({ type: Actions.FETCH_PHOTO_INFO });

    let photoData = await getPhotosInfo(state);

    if (photoData.error) {
      dispatch({ type: Actions.FAIL_PHOTO_INFO });
    } else {
      dispatch({
        type: Actions.SUCCESS_PHOTO_INFO,
        photos: photoData.photos,
        total: photoData.total,
      });
    }
  }
}
