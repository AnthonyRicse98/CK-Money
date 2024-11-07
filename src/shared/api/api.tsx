import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface  IAxios { 
    url : string , 
    client?: string , 
    config?: AxiosRequestConfig
}

const doGet = async ( { url } : IAxios ) => {
    try {
        const response : AxiosResponse = await axios.get(url)
        return response.data

    }catch (e) {
        console.error(e)
    }
}

export { doGet }