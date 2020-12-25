import axios from 'axios';
import authActions from './authActions';
import notificationActions from '../notification/notificationActions';

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
      dispatch(authActions.registerSuccess(data));
    })
    .catch(error => {
      dispatch(authActions.registerError(error));
    })
    .finally(() =>
      setTimeout(() => dispatch(notificationActions.notificationFalse()), 2500),
    );
};

const login = credentials => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('auth/login', credentials)
    .then(({ data }) => {
      token.set(data.accessToken);
      dispatch(authActions.loginSuccess(data));
    })
    .catch(error => {
      dispatch(authActions.loginError(error));
    })
    .finally(() =>
      setTimeout(() => dispatch(notificationActions.notificationFalse()), 2500),
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
    })
    .finally(() =>
      setTimeout(() => dispatch(notificationActions.notificationFalse()), 2500),
    );
};

export default {
  register,
  login,
  getCurrentUser,
  logOut,
};
