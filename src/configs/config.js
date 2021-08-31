import { ACTION_TYPES } from "../core/actionTypes";

import * as controllers from './controllerFactory';

export const configs = {
    [ACTION_TYPES.CNTRL_LOGIN]: controllers.authControllers.login,
    [ACTION_TYPES.CNTRL_REGISTRATION]: controllers.authControllers.registaration,

}