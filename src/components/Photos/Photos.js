// This component renders the all the photos in a grid.
import React, { useContext } from 'react';
import AppContext from '../../data/AppContext';
import { Loading } from 'carbon-components-react';
import Photo from './Photo';
import { Misuse32 } from '@carbon/icons-react';

// Get an array of photo html objects.
const getPhotos = photos => {
  let result = null;

  if (photos !== null) {
    result = photos.map(photo => (
      <div className="bx--col-md-02" key={photo.id}>
        <Photo photoInfo={photo} />
      </div>
    ));
  }

  return result;
};

const Photos = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="photos__container ">
      <Loading active={state.loading} />
      <div
        className="photos__message_container"
        style={{
          display: state.photos === null && !state.loading ? '' : 'none',
        }}>
        <div className="photos__message">
          <p>
            Use the text and date range filters above to narrow the scope of the
            photo search. You can leave these filters empty to search for all
            photos.
          </p>
        </div>
      </div>
      <div
        className="photos__message_container"
        style={{
          display: state.error && !state.loading ? '' : 'none',
        }}>
        <div className="photos__message">
          <Misuse32 className="photos__error" />
          <span>
            An error occurred loading the photos. Please try again later.
          </span>
        </div>
      </div>
      <div
        className="bx--grid"
        style={{ display: state.loading ? 'none' : '' }}>
        <div className="bx--row">{getPhotos(state.photos)}</div>
      </div>
    </div>
  );
};

export default Photos;
