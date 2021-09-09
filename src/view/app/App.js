import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Register from '../pages/registration/registration';
import SignIn from '../pages/login/login';
import HeaderBar from '../components/headerBar/header';
import UnAuthGuard from '../guards/unAuthGuard/unAuthGuard';
import AuthGuard from '../guards/authGuard/authGuard';
import { store } from '../../stateManagment/store';
import Table from "../pages/table/table"
import Todos from '../pages/todosCover/todos';

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
                <Table/>
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

