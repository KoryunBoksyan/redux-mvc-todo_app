import httpClients from "../../httpClients";

const END_POINT = {
  prefix: 'user',
  login: 'login',
  register: "register"
}

const postLoginUrl = () => `${END_POINT.prefix}/${END_POINT.login}`;
const postRegisterUrl = () => `${END_POINT.prefix}/${END_POINT.register}`;

class AuthApiHandler {
  constructor ( props ) {

  }
    login ( data ){
      return httpClients.post (postLoginUrl(), data);
    }

     registaration(data) {
      return httpClients.post(postRegisterUrl(), data)
    }
}

const authApiHendler = new AuthApiHandler();
export default authApiHendler;