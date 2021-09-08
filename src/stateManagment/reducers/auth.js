import { ACTION_TYPES } from "../../core/actionTypes";
import createReducer from "../../helpers/createReducer";
import httpClients from "../../services/httpClients";

const token = localStorage.getItem("token");

const authInitialState = token ? true : false;

if(authInitialState) {
  httpClients.addAuthorization(token);
}

export const authReducer = createReducer(authInitialState,{
    [ACTION_TYPES.RX_SET_AUTH_BOOL] : (state, action) => action.payload
  });
  

  