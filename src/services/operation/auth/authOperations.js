class AuthOperation {
    constructor (authApi) {
        this.authApi = authApi
    }

    async login(data) {
        const response = await this.authApi.login(data);
        return response;
    }

    registaration = async () => {
        const response = await this.authApi.registaration()
    }
}

export default AuthOperation;