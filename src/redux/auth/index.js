export { default as authOperations } from "./authOperations";
export { default as authSelectors } from "./authSelectors";
export { default as authReducer } from "./authReducer";
export { default as authActions } from "./authActions";

const getUser = (state) => state.auth.token;

export default { getUser };
