import {BASE_URL} from "./constants";

export const checkResponse = async (res: Response) => {
		if (res.ok) {
				return await res.json();
		}
		let response = await res.json()
		console.error(`Error ${res.status} ${response.message}`)
		return Promise.reject(`${response.message}`);
}

export const request = (url: string, options: RequestInit = {}) => {
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

export const fetchWithRefresh = async (url: string, options: RequestInit) => {
		try {
				return await request(url, options);
		} catch (err) {
				if (err === "jwt expired") {
						const refreshData = await refreshToken();
						if (!refreshData.success) {
								console.log(refreshData)
								return Promise.reject(refreshData);
						}
						const accessToken = refreshData.accessToken.split(' ')[1]
						localStorage.setItem("refreshToken", refreshData.refreshToken);
						localStorage.setItem("accessToken", accessToken);
						(options.headers as Headers).set('authorization', refreshData.accessToken);
						return await request(url, options);
				} else {
						return Promise.reject(err);
				}
		}
};