import {BASE_URL} from "./constants";

export const checkResponse = async (res) => {
    if (res.ok) {
        return await res.json();
    }
    let response = await res.json()
    console.error(`Error ${res.status} ${response.message}`)
    return Promise.reject(`${response.message}`);
}

export const request = (url, options) => {
    console.log(url,options)
    return fetch(BASE_URL + url, options).then(checkResponse)
}

export const refreshToken = () => {
    return request(`api/auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    });
};

export const fetchWithRefresh = async (url, options) => {
    try {
        return await request(url, options);
    } catch (err) {
        if (err === "jwt expired") {
            const refreshData = await refreshToken();
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem("accessToken", refreshData.accessToken);
            options.headers.authorization = refreshData.accessToken;
            return await request(url, options);
        } else {
            return Promise.reject(err);
        }
    }
};