import {BASE_URL, } from '../config/Config'
import {BASE_URL_POST} from "../config/Config";

class ApiAccess {
    /*
    * This is a header.
    * It will call on GET method.
    * */

    static headers_get() {
        return {
           // AUTHORIZATION: "APIKEY"
        }
    }

    /*
    * This is a header.
    * It will call on POST method.
    * */

    static headers_post() {
        return {
            // AUTHORIZATION: APIKEY_POST,
            // CONTENT_TYPE: CONTENT_TYPE_KEY
        }
    }

/*
* Calling for GET method with Headers
*/
    static getWith_Headers(api_path) {
        return this.callingApiWith_Auth(api_path, null, 'GET');
    }

/*
 * Calling for GET method without Headers
 */
    static get(api_path) {
        return this.callingApi(api_path, null, 'GET');
    }

// Calling for POST method
    static post(api_path, params) {
        return this.callingApiWith_Auth(api_path, params, 'POST');
    }

    // Calling for PUT method
    static put(route, params) {
        return this.xhr(route, params, 'PUT');
    }

    // Calling for DELETE method
    static delete(route, params) {
        return this.xhr(route, params, 'DELETE');
    }

    static callingApi(api_path, params, verb) {
        const url = `${BASE_URL + api_path}`;
        let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null);

        return fetch(url, options).then(resp => {
            let list = resp._bodyText
            let json = resp.json();
            if (resp.ok) {
                return json
            }
            return json.then(err => {
                throw err
            });
        });

    }

    static callingApiWith_Auth(api_path, params, verb) {

        let url = `${BASE_URL + api_path}`;
        let formBody = [];

        // Here we convert params to formBody format and store at fromBody list
        if (params !== null) {
            url = `${BASE_URL_POST + api_path}`;
            for (let property in params) {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(params[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
        }

        let options = Object.assign({method: verb}, params ? {body: formBody} : null);
        /*
        *  Checking whether params is null,
        *  If params is null then it will call headers_get function,
        *  or it will call headers_post function
        *  */

        if (params !== null) {
            options.headers = ApiAccess.headers_post();
        } else {
            options.headers = ApiAccess.headers_get();
        }

        return fetch(url, options).then(resp => {
            let list = resp._bodyText
            let json = resp.json();
            if (resp.ok) {
                return json
            }
            return json.then(err => {
                throw err
            });
        });

    }
}

export default ApiAccess;