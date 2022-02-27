import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export const PATH_URL: string = 'http://localhost:3000/' || import.meta.env.VITE_API_URL


const service: AxiosInstance = axios.create({
    baseURL: PATH_URL,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
})

// 判断token是否存在
service.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
})

service.interceptors.response.use((res: AxiosResponse) => {
    if(res.status==200){
        return Promise.resolve(res.data) 
    }else{
        return Promise.reject(res.data) 
    }
})

export const get = (url: string, params: any = {}) => {
    return new Promise((resolve, reject) => {
        service.get(url, { params: params })
            .then(res => {
                return resolve(res)
            })
            .catch(error => {
                return reject(error)
            })
    })
}

export const post = (url: string, data: any) => {
    return new Promise((resolve, reject) => {
        service.post(url, data)
            .then(res => {
                return resolve(res)
            })
            .catch(error => {
                return reject(error)
            })
    })
}

export default service