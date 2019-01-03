import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';

it('renders landing page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingPage />, div);
});

