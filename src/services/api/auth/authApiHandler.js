import httpClients from "../../httpClients";

const END_POINT = {
  prefix: 'user',
  login: 'login',
  logout: 'logout',
  register: "register",

}

const postLoginUrl = () => `${END_POINT.prefix}/${END_POINT.login}`;
const postRegisterUrl = () => `${END_POINT.prefix}/${END_POINT.register}`;
const logOutUrl = () => `${END_POINT.prefix}/${END_POINT.logout}`;

class AuthApiHandler {
  constructor ( props ) {

  }
    login(data){
      return httpClients.post (postLoginUrl(), data);
    }

    logOut(data){
      return httpClients.post(logOutUrl(), data)
    }

     registaration(data) {
      return httpClients.post(postRegisterUrl(), data)
    }
}

const authApiHendler = new AuthApiHandler();
export default authApiHendler;