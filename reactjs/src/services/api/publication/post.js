import { AxiosClientPublication } from "@services/index"

export const postPublication = async (url, newPost) => {
	let res = await AxiosClientPublication.post(url, newPost)
	return res
}
