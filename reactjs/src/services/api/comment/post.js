import { AxiosClientComment } from "@services/index"

export const postComments = async (url, data) => {
	let res = await AxiosClientComment.post(url, data)
	return res
}
