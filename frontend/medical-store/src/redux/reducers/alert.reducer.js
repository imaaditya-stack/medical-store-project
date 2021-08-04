import { SET_ALERT, REMOVE_ALERT, RESET_ALERTS } from "../actions/action.types";

const INIT_STATE = [];

const alertReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_ALERT: {
      return [...state, action.payload];
    }
    case REMOVE_ALERT: {
      return state.filter((alert) => alert.id !== action.payload);
    }
    case RESET_ALERTS: {
      return [];
    }
    default:
      return state;
  }
};

export default alertReducer;
