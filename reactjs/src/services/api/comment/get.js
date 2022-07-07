import { AxiosClientComment } from "@services/index"

export const getComments = async (url, publicationID) => {
	let res = await AxiosClientComment.get(url, { params: { publicationID: publicationID } })
	return { data: res.data, status: res.status, statusText: res.statusText }
}
