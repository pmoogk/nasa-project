// This is the main component for the nasa photo application.
import React, { useReducer, useEffect } from 'react';
import './nasa-app.scss';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { reducer, INITIAL_STATE } from '../../data/Reducer';
import AppContext from '../../data/AppContext';
import Photos from '../Photos/Photos.js';
import Actions from '../../data/Actions';

const NasaApp = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    if (window.location.search.indexOf('error') !== -1) {
      dispatch({ type: Actions.TEST_ERROR_STATE });
    }
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <section className="nasa-app__section">
        <Header />
        <Photos />
        <Footer />
      </section>
    </AppContext.Provider>
  );
};

export default NasaApp;
