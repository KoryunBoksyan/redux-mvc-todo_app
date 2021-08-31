import { ACTION_TYPES } from "../../core/actionTypes";

export const cntrlLogin = payload => ({
    type : ACTION_TYPES.CNTRL_LOGIN,
    payload,
})