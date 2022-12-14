import axios from "axios"

export const api = axios.create({
  withCredentials: true,
  baseURL: "https://jsonplaceholder.typicode.com",
})

const errorHandler = (error: any) => {
  const statusCode = error.response?.status

  
  if (statusCode && statusCode !== 401) {
    console.error(error)
  }

  return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error)
})

export default api