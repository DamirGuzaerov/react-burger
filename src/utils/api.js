import {BASE_URL} from "./constants";

export const checkResponse = async (res) => {
    if (res.ok) {
        return res.json();
    }
    let response = await res.json()
    console.error(response)
    return Promise.reject(`Error ${response.message}`);
}

export const request = (url, options) => {
    return fetch(BASE_URL + url, options).then(checkResponse)
}
