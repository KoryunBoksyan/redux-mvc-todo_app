import { LensTwoTone } from "@material-ui/icons";

class AuthApiHandler {
    async login(data){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "email": "sargsyand89@gmail.com",
          "password": "20022002Dav"
        });
        
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://api-nodejs-todolist.herokuapp.com/user/login", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }

    registaration(state, action) {
        console.log("fetch registration");
    }
}

const authApiHendler = new AuthApiHandler();
export default authApiHendler;