import { AxiosClientComment } from "@services/index"

export const postComments = async (url, pubID, data) => {
	let res = await AxiosClientComment.post(url, { id: pubID, message: "Ronpiche" })
	return res
}
