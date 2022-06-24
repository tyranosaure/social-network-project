import { AxiosClientComment } from "@services/index"

export const getComments = async (url, pubID) => {
	let res = await AxiosClientComment.get(url, { params: { pubID: pubID } })
	return { data: res.data, status: res.status, statusText: res.statusText }
}
