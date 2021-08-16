import {
  ADD_COMPANY,
  LOAD_COMPANIES,
  DELETE_COMPANY,
  UPDATE_COMPANY,
  COMPANIES_ERROR,
  DELETE_COMPANY_ERROR,
} from "../actions/action.types";

const INIT_STATE = { companies: [], loading: true };

const companyReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOAD_COMPANIES: {
      return {
        ...state,
        companies: action.payload,
        loading: false,
      };
    }
    case COMPANIES_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case ADD_COMPANY: {
      return {
        ...state,
        companies: [action.payload, ...state.companies],
      };
    }
    case UPDATE_COMPANY: {
      return {
        ...state,
        companies: state.companies.map((store) =>
          store.id === action.payload.id ? action.payload : store
        ),
      };
    }
    case DELETE_COMPANY: {
      return {
        ...state,
        companies: state.companies.filter(
          (company) => company.id !== action.payload.id
        ),
      };
    }
    case DELETE_COMPANY_ERROR: {
      return {
        ...state,
        companies: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default companyReducer;
