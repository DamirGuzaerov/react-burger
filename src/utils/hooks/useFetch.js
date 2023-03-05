import {useState, useEffect} from 'react'

const BASE_URL = 'https://norma.nomoreparties.space/'
const useFetch = (url, isLoadingInitial = true) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(isLoadingInitial)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(BASE_URL + url)
                const result = await response.json()
                if (response.ok) {
                    setData(result.data)
                } else {
                    await Promise.reject(`Ошибка ${response.status}`);
                }
            } catch (err) {
                console.error('fetch error', err)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])
    return {data, isLoading}
}
export default useFetch