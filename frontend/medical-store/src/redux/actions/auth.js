import { AUTH_SUCCESS, AUTH_ERROR, LOGOUT } from "./action.types";
import { handleAuthentication } from "../../Utils/auth";
import { AXIOS_CLIENT } from "../../Api/axios.config";
import { setAlert } from "./alert";

const authStateCheck = () => async (dispatch) => {
  try {
    await AXIOS_CLIENT.get("store/auth-check/");
    dispatch({ type: AUTH_SUCCESS });
  } catch (error) {
    if (error) {
      dispatch({ type: AUTH_ERROR });
    }
  }
};

const login = (data, history) => async (dispatch) => {
  try {
    const res = await AXIOS_CLIENT.post("store/login/", data);
    handleAuthentication(res.data.token);
    dispatch({ type: AUTH_SUCCESS });
    history.push("/stores");
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) {
        dispatch(setAlert(error.response.data?.MSG, "danger"));
      }
    }
  }
};

const logout = (history) => async (dispatch) => {
  try {
    await AXIOS_CLIENT.get("store/logout/");
    dispatch({ type: LOGOUT });
    localStorage.clear();
    history.push("/");
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    }
  }
};

const authError = () => ({
  type: AUTH_ERROR,
});

export { authStateCheck, login, logout, authError };
