import {useState, useEffect} from 'react'

const BASE_URL = 'https://norma.nomoreparties.space/'
const useFetch = (url, isLoadingInitial = true) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(isLoadingInitial)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(BASE_URL + url)
                const result = await response.json()
                setIsLoading(false)
                if (response.ok) {
                    setData(result.data)
                } else {
                    console.error('fetch error')
                }
            } catch (err) {
                console.error('fetch error')
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])
    return {data, isLoading}
}
export default useFetch