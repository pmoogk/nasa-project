// This component renders the nasa photos title and description.
import React, { useContext } from 'react';
import { Button } from 'carbon-components-react';
import AppContext from '../../data/AppContext';
import { search } from '../../data/SearchUtil';
import Filter from '../Filter/Filter.js';

const Header = () => {
  const { dispatch, state } = useContext(AppContext);

  return (
    <header className="header__container">
      <div className="header__title">NASA Photo Gallery</div>
      <div className="header__description">
        Welcome to the NASA Photo Gallery. You can find many stellar pictures
        here. Use the filter to search for text in a particular photo
        title/description or select a date range of when the photo was taken.
        Click on a photo to see a larger image and to see additional information
        about it.
      </div>
      <div className="header__filter">
        <Filter />
        <Button
          className="header__searchButton"
          onClick={search.bind(this, dispatch, state)}>
          Search
        </Button>
      </div>
    </header>
  );
};

export default Header;
