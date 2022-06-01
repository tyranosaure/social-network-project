import { AxiosClientPublication } from "@services/index"

export const getPublications = async (url) => {
	let res = await AxiosClientPublication.get(url)
	return { data: res.data, status: res.status, statusText: res.statusText }
}
