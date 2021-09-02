import React from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

export default function AuthGuard({ children }) {
    const auth = useSelector(state => state.auth);
    return auth ? children : <Redirect to='/login' />
}
