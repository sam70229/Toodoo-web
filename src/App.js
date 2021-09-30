import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './layouts/Layout';

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
