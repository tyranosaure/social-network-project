import axios from "axios"

export const AxiosClientComment = axios.create({
	baseURL: "https://service-festival-commentaire-6mvg7oyrgq-ew.a.run.app/",
})
export const AxiosClientPublication = axios.create({
	baseURL: "https://service-festival-publication-6mvg7oyrgq-ew.a.run.app/",
})

export { getPublications } from "./publication/get"
export { postPublication } from "./publication/post"
export { deletePublication } from "./publication/delete"

export { getComments } from "./comment/get"
export { postComments } from "./comment/post"
