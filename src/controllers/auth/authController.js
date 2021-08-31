
class AuthController {
    constructor ( authOperation ) {
        this.authOperation = authOperation
    }
    login = async (state, action) => {
        const response = await this.authOperation.login(action.payload);
        return response;
    }

    registaration = async (state, action) => {
        const response = await this.authOperation.registaration ( action.payload );
        return response;
    }
}

export default AuthController;