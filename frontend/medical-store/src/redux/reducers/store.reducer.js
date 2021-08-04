import {
  ADD_STORE,
  DELETE_STORE,
  DELETE_STORE_ERROR,
  LOAD_STORES,
  STORES_ERROR,
  STORE_TYPES,
  STORE_TYPES_ERROR,
  UPDATE_STORE,
} from "../actions/action.types";

const INIT_STATE = { stores: [], loading: true, storeTypes: [] };

const storeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOAD_STORES: {
      return {
        ...state,
        stores: action.payload,
        loading: false,
      };
    }
    case STORES_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case STORE_TYPES: {
      return {
        ...state,
        storeTypes: action.payload,
        loading: false,
      };
    }
    case STORE_TYPES_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case ADD_STORE: {
      return {
        ...state,
        stores: [...state.stores, action.payload],
      };
    }
    case UPDATE_STORE: {
      return {
        ...state,
        stores: state.stores.map((store) =>
          store.id === action.payload.id ? action.payload : store
        ),
      };
    }
    case DELETE_STORE: {
      return {
        ...state,
        stores: state.stores.filter((store) => store.id !== action.payload.id),
      };
    }
    case DELETE_STORE_ERROR: {
      return {
        ...state,
        stores: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default storeReducer;
