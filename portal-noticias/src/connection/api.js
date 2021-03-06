import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const getDado = async (url, setDado) => {
    const res = await api.get(url)

    setDado(res.data)
}