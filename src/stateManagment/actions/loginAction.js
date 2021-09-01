import { ACTION_TYPES } from "../../core/actionTypes";

export const cntrlLogin = payload => ({
    type : ACTION_TYPES.CNTRL_LOGIN,
    payload,
});

export const rxSetAuth = payload => ({
    type: ACTION_TYPES.RX_SET_AUTH_BOOL,
    payload
})