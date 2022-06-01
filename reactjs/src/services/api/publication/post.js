import { AxiosClientPublication } from "@services/index"

export const postPublication = async (url, userID, data) => {
	let res = await AxiosClientPublication.post(url, { id: userID, message: "Ronpiche" })
	return res
}
