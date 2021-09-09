import httpClients from '../../services/httpClients';
import { cntrlLogOut, rxSetAuth } from '../../stateManagment/actions/loginAction'
class AuthController {
    constructor(authOperation) {
        this.authOperation = authOperation
    }
    login = async (state, action) => {
        const response = await this.authOperation.login(action.payload);
        if(response.token) {
            httpClients.addAuthorization(response.token);
            state.dispatch(rxSetAuth(true));
            localStorage.setItem("token", response.token)
        }
        return response;
    }

    logOut = async (state, action) => {
        const response = await this.authOperation.logOut(action.payload);
        localStorage.removeItem("token");
        state.dispatch(rxSetAuth(false));
        return response;
    }

    registaration = async(state, action) => {
        const response = await this.authOperation.registaration(action.payload);
        return response;
    }
}

export default AuthController;