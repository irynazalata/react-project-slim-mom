const getToken = (state) => state.auth.token;

const isAuthenticated = (state) => state.auth.token;

export default { getToken, isAuthenticated };
