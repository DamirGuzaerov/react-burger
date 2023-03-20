import {BASE_URL} from "./constants";

export const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
}

export const request = (url, options) => {
    return fetch(BASE_URL+url,options).then(checkResponse)
}
