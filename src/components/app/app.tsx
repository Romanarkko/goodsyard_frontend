import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SigninPage, DashPage } from '../../pages';
import IndexPage from '../../pages/indexPage/index.page';
import { ProtectedRoute, RedirectRoute } from '../../services/routes';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        {/* ToDo delete next route after testing */}
        <Route exact path="/signin_test">
          <SigninPage />
        </Route>
        <RedirectRoute pathname="dash" path="/signin">
          <SigninPage />
        </RedirectRoute>
        <ProtectedRoute exact path="/dash">
          <DashPage />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default App;
