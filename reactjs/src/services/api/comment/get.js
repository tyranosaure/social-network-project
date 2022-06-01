import { AxiosClientComment } from "@services/index"

export const getComments = async (url, pubID) => {
	let res = await AxiosClientComment.get(url, pubID)
	return res
}
