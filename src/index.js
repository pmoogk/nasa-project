// Main index file for this nasa application.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NasaApp from './components/NasaApp/NasaApp.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <NasaApp />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
