// ANIMATION
export { default as AnimatedRoutes } from "./routes/AnimatedRoutes"
// AUTH0
export { default as AuthConfig } from "./auth0/AuthConfig"
// REDUX
export { default as ReduxStore } from "./redux/store"
export * as UserSlice from "./redux/user/userSlice"
// API
export { AxiosClientPublication, AxiosClientComment, getPublications, postPublication, getComments, postComments } from "./api/index"
