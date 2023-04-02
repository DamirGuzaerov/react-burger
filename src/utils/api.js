import {BASE_URL} from "./constants";

export const checkResponse = async (res) => {
    if (res.ok) {
        console.log('ok')
        return await res.json();
    }
    let response = await res.json()
    console.error(`Error ${res.status} ${response.message}`)
    return Promise.reject(`Error ${res.status} ${response.message}`);
}

export const request = (url, options) => {
    console.log(url,options)
    return fetch(BASE_URL + url, options).then(checkResponse)
}
