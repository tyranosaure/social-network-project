import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
	name: "user",
	initialState: {
		isLogged: "loading",
		value: undefined,
	},
	reducers: {
		login: (state, action) => {
			state.isLogged = true
			state.value = action.payload
		},
		logout: (state) => {
			state.isLogged = false
			state.value = undefined
		},
	},
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
