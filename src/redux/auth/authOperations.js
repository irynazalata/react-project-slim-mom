import axios from 'axios';
import authActions from './authActions';
import notificationActions from '../notification/notificationActions';
import errorActions from '../error/errorActions';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post('auth/register', credentials)
    .then(({ data }) => {
      dispatch(notificationActions.notificationTrue());
      dispatch(authActions.registerSuccess(data));
    })
    .catch(error => {
      dispatch(notificationActions.notificationTrue());
      dispatch(authActions.registerError(error));
    })
    .finally(() =>
      setTimeout(() => dispatch(notificationActions.notificationFalse()), 5000),
    );
};

const login = credentials => dispatch => {
  dispatch(authActions.loginRequest());
  dispatch(errorActions.errorFalse());

  axios
    .post('auth/login', credentials)
    .then(({ data }) => {
      token.set(data.accessToken);
      dispatch(notificationActions.notificationTrue());
      dispatch(authActions.loginSuccess(data));
    })
    .catch(error => {
      dispatch(errorActions.errorTrue());
      dispatch(notificationActions.notificationTrue());
      dispatch(authActions.loginError(error));
    })
    .finally(() =>
      setTimeout(() => dispatch(notificationActions.notificationFalse()), 5000),
    );
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('user')
    .then(({ data }) => {
      dispatch(authActions.getCurrentUserSuccess(data));
    })
    .catch(error => {
      if (error.response.status === 401) {
        dispatch(authActions.tokenUnset());
      }
      dispatch(authActions.getCurrentUserError(error));
    });
};

const logOut = credentials => dispatch => {
  dispatch(authActions.logoutRequest());

  axios
    .post('auth/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => {
      if (error.response.status === 401) {
        dispatch(authActions.tokenUnset());
      }
      dispatch(authActions.logoutError(error));
    });
};

export default {
  register,
  login,
  getCurrentUser,
  logOut,
};
