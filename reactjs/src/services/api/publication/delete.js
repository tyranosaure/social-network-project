import { AxiosClientPublication } from "@services/index"

export const deletePublication = async (url, publicationID) => {
	let res = await AxiosClientPublication.delete(url, { data: { publicationID: publicationID } })
	return res
}
