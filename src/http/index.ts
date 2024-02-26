import axios, {AxiosInstance} from "axios"

const clienteHttp: AxiosInstance = axios.create({
    baseURL: 'https://alura-tracker-steel.vercel.app/'
})

export default clienteHttp