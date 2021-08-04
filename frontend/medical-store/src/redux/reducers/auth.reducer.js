import { AUTH_SUCCESS, AUTH_ERROR, LOGOUT } from "../actions/action.types";

const INIT_STATE = { isAuthenticated: false, loading: true };

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return { isAuthenticated: true, loading: false };
    }
    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
