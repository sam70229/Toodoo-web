import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './layouts/Layout';
import './scss/styles.scss';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route component={Layout} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
