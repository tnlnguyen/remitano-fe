import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'Containers/Home/Home';
import { SCREEN } from 'Core/Utils/Screens';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={SCREEN.HOME} component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
