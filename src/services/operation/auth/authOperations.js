class AuthOperation {
    constructor ( authApi ) {
        this.authApi = authApi
    }

    async login ( data ) {
        const response = await this.authApi.login ( data );
        return response;
    }

    async registaration ( data ) {
        const response = await this.authApi.registaration ( data );
        return response;
    }
}

export default AuthOperation;