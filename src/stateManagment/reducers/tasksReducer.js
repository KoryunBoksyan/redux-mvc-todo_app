import { ACTION_TYPES } from "../../core/actionTypes";
import createAsyncReducer from '../../helpers/createAsyncReducer'
import { combineReducers } from 'redux';
import createReducer from "../../helpers/createReducer";

export const tasksReducer = combineReducers({
    tasks: createAsyncReducer(ACTION_TYPES.RX_GET_ALL_TASK, []),
    task: createReducer({
        [ACTION_TYPES.RX_GET_TASK_BY_ID]: (state, action) => action.payload, 
    }),
})
