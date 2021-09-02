import { ACTION_TYPES } from "../../core/actionTypes";
import createReducer from "../../helpers/createReducer";

export const authReducer = createReducer(false,{
    [ACTION_TYPES.RX_SET_AUTH_BOOL] : (state, action) => action.payload
  });
  
  