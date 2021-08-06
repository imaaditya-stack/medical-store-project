import {
  ADD_MED,
  LOAD_MEDS,
  MEDS_ERROR,
  MED_TYPES,
  MED_TYPES_ERROR,
  DELETE_MED,
  DELETE_MED_ERROR,
  UPDATE_MED,
} from "../actions/action.types";

const INIT_STATE = { meds: [], loading: true, medTypes: [] };

const medReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOAD_MEDS: {
      return {
        ...state,
        meds: action.payload,
        loading: false,
      };
    }
    case MEDS_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case MED_TYPES: {
      return {
        ...state,
        medTypes: action.payload,
        loading: false,
      };
    }
    case MED_TYPES_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case ADD_MED: {
      return {
        ...state,
        meds: [action.payload, ...state.meds],
      };
    }
    case UPDATE_MED: {
      return {
        ...state,
        meds: state.meds.map((med) =>
          med.id === action.payload.id ? action.payload : med
        ),
      };
    }
    case DELETE_MED: {
      return action.payload?.storeDeleted
        ? {
            ...state,
            meds: state.meds.map((med) =>
              med.store_id === action.payload.id
                ? { ...med, store_id: null }
                : med
            ),
          }
        : {
            ...state,
            meds: state.meds.filter((med) => med.id !== action.payload.id),
          };
    }
    case DELETE_MED_ERROR: {
      return {
        ...state,
        meds: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default medReducer;
