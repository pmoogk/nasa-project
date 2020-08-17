import React from 'react';
import ReactDOM from 'react-dom';
import NasaApp from './NasaApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NasaApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
