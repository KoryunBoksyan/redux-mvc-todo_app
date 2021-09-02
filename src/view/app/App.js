import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Register from '../pages/registration/registration';
import SignIn from '../pages/login/login';
import Home from '../pages/home/home';
import HeaderBar from '../components/headerBar/header';
import UnAuthGuard from '../guards/unAuthGuard/unAuthGuard';
import AuthGuard from '../guards/authGuard/authGuard';
import { store } from '../../stateManagment/store';
import Todos from '../pages/todos/todos';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <HeaderBar/>
          <Switch>
            <Route exact path="/login">
              <UnAuthGuard>
                <SignIn/>
              </UnAuthGuard>
            </Route>
            <Route exact path="/register">
              <UnAuthGuard>
                <Register/>
              </UnAuthGuard>
            </Route>
            <Route exact path="/">
              <UnAuthGuard>
                <Todos/>
              </UnAuthGuard>
            </Route>
            <Route path="/home">
              <AuthGuard>
                <Home/>
              </AuthGuard>
            </Route>
            <Redirect to="/"/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

