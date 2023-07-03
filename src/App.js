import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header';
import Login from './login';
import Register from './Register';
import Dashboard from './dashboard';
import CreatePlace from './createPlace';
import Logout from './logout';
import { AuthProvider } from './authContext';
import ProtectedRoute from './protectedRoute';

const App = () => {
  return (
    <Router>
    <AuthProvider>
      <div>
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/create" component={CreatePlace} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
    </AuthProvider>
  </Router>
  );
};

export default App;