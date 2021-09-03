import { ACTION_TYPES } from "../../core/actionTypes";
import createReducer from "../../helpers/createReducer";

const authInitialState = localStorage.getItem("token") ? true : false;

export const authReducer = createReducer(authInitialState,{
    [ACTION_TYPES.RX_SET_AUTH_BOOL] : (state, action) => action.payload
  });
  
  