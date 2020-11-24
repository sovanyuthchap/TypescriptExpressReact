import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import AppMainPage from './containers';

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={AppMainPage} />
    </Router>
  );
};

export default Routes;
