import axios from "axios"

export const AxiosClientComment = axios.create({
	baseURL: "http://localhost:8080/",
})
export const AxiosClientPublication = axios.create({
	baseURL: "http://localhost:8081/",
})

export { getPublications } from "./publication/get"
export { postPublication } from "./publication/post"
export { getComments } from "./comment/get"
export { postComments } from "./comment/post"
