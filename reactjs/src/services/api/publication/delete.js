import { AxiosClientPublication } from "@services/index"

export const deletePublication = async (url, id) => {
	let res = await AxiosClientPublication.delete(url, { data: { id: id } })
	return res
}
