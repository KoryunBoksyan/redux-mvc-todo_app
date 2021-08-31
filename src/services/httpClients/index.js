import { API_URL } from "../../core/constants/urls";

class HttpClients {
    static get() {

    }

    static post(url, data) {
       return HttpClients.unRequest(url, 'POST', data)
    }

    static put() {

    }

    static delete() {

    }

    static async unRequest(url, method, data) {
        console.log(url, method, data)
        const response = await fetch(`${API_URL}/${url}`, {
            method,
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(data)
        });

        return response;
    }
}

export default HttpClients;
// HttpClients.post('users', {email: 'sargsyand888@gmail.com', password: 4545454}) //