const isAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

const getUserId = state => state.auth.user.id;

export default { isAuthenticated, getUserName, getUserId };
