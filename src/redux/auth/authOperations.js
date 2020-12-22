import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "https://slimmom-backend.herokuapp.com/";

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axios
    .post("auth/register", credentials)
    .then(({ data }) => {
      dispatch(authActions.registerSuccess(data));
    })
    .catch((error) => dispatch(authActions.registerError(error)));
};

export default {
  register,
};
