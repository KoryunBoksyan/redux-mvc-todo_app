import { API_URL } from "../../core/constants/urls";

class HttpClients {
    constructor ( { api, deafultHeaders } ) {
        this.api = api;
        this.deafultHeaders = deafultHeaders;
    }

    get ( url ) {
        return this.unRequest ( url, { method: 'GET' } );
    }

    post( url, body ) {
       return this.unRequest ( url, { method: 'POST', body } );
    }

    put (url, body ) {
        return this.unRequest ( url, { method: 'PUT', body } );
    }

    delete( url ) {
        return this.unRequest ( url, { method: 'DELETE' } );
    }

    async unRequest ( url, options ) {
        const { body, restOptions } = options;
        const requestOptions = {
            headers: this.deafultHeaders,
            ...restOptions,
        }

        if ( body !== undefined ) {
            options.body = JSON.stringify ( body )
        }

        const response = await fetch ( `${this.api}/${url}`, requestOptions )
        .then( res => res.json() );

        return response;
    }
}

const httpClients = new HttpClients ( { 
    api: API_URL,
    deafultHeaders: new Headers ( {
        "Content-Type": "application/json" ,
        'Accept': 'application/json'
    } ),
 } 
);

export default httpClients;
