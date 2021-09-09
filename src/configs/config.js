import { ACTION_TYPES } from "../core/actionTypes";

import * as controllers from './controllerFactory';

export const configs = {
    [ACTION_TYPES.CNTRL_LOGIN]: controllers.authControllers.login,
    [ACTION_TYPES.CNTRL_LOGOUT]: controllers.authControllers.logOut,
    [ACTION_TYPES.CNTRL_REGISTRATION]: controllers.authControllers.registaration,
    [ACTION_TYPES.CNTRL_ADD_TASK]: controllers.tasksController.addTask,
    [ACTION_TYPES.CNTRL_GET_ALL_TASK]: controllers.tasksController.getAllTasks,
    [ACTION_TYPES.CNTRL_PUT_ALL_TASK]: controllers.tasksController.putAllTask,
}