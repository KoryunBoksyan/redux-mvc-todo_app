import React from "react";
import { BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HeaderBar from "../components/header_bar/header";
import SignIn from "../pages/login/login";
import Register from "../pages/registration/registration";
import { Provider } from 'react-redux';
import { store } from '../../stateManagment/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
            <HeaderBar/>
            <Switch>
              <Route exact path="/login" component={SignIn} />
              <Route exact path="/register" component={Register} />
              <Redirect to="/"/>
            </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

