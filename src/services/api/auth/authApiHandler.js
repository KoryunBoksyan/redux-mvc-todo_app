import HttpClients from "../../httpClients";

const END_POINT = {
  prefix: 'user',
  login: 'login'
}

class AuthApiHandler {
  constructor(props) {

  }
    async login(data){
        HttpClients.post('user/login', data)
        // const myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");
        
        // const raw = JSON.stringify({
        //   "email": "sargsyand89@gmail.com",
        //   "password": "20022002Dav"
        // });
        
        // const requestOptions = {
        //   method: 'POST',
        //   headers: myHeaders,
        //   body: raw,
        //   redirect: 'follow'
        // };
        
        // fetch("https://api-nodejs-todolist.herokuapp.com/user/login", requestOptions)
        //   .then(response => response.text())
        //   .then(result => console.log(result))
        //   .catch(error => console.log('error', error));
    }

    async registaration(data) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify(data);
        
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://api-nodejs-todolist.herokuapp.com/user/register", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }
}

const authApiHendler = new AuthApiHandler();
export default authApiHendler;