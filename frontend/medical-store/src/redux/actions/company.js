import {
  ADD_COMPANY,
  LOAD_COMPANIES,
  DELETE_COMPANY,
  UPDATE_COMPANY,
  COMPANIES_ERROR,
  DELETE_COMPANY_ERROR,
} from "../actions/action.types";
import { AXIOS_CLIENT } from "../../Api/axios.config";
import { setAlert } from "./alert";

const loadCompanies = () => async (dispatch) => {
  try {
    const res = await AXIOS_CLIENT.get("company/");
    dispatch({ type: LOAD_COMPANIES, payload: res.data });
  } catch (error) {
    dispatch({ type: COMPANIES_ERROR });
  }
};

const addCompany = (data, history, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const res = await AXIOS_CLIENT.post("company/", data);
    console.log("ADDED COMPANY", res);
    dispatch({ type: ADD_COMPANY, payload: res.data?.RECORD });
    dispatch(setAlert(res.data?.MSG, "success"));
    setLoading(false);
    history.push("/companies");
  } catch (error) {
    setLoading(false);
    if (error) {
      if (error.response.status === 400) {
        if (error.response.data.company_code) {
          dispatch(setAlert(error.response.data.company_code, "danger"));
        }
      }
    }
  }
};

const updateCompany = (data, history, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const res = await AXIOS_CLIENT.put("company/", data);
    dispatch({ type: UPDATE_COMPANY, payload: res.data?.RECORD });
    dispatch(setAlert(res.data?.MSG, "success"));
    setLoading(false);
    history.push("/companies");
  } catch (error) {
    setLoading(false);
    if (error) {
      if (error.response?.status === 400) {
        if (error.response?.data.company_code) {
          dispatch(setAlert(error.response.data.company_code, "danger"));
        }
      } else {
        dispatch(setAlert("Operation Failed !", "danger"));
      }
    }
  }
};

const deleteCompany = (data, history, currentCompanies) => async (dispatch) => {
  dispatch({ type: DELETE_COMPANY, payload: data });

  try {
    const res = await AXIOS_CLIENT.delete("company/", { data });
    dispatch(setAlert(res.data?.MSG, "success"));
  } catch (error) {
    if (error) {
      dispatch({ type: DELETE_COMPANY_ERROR, payload: currentCompanies });
      dispatch(setAlert("Operation Failed !", "danger"));
    }
  }
};

export { loadCompanies, addCompany, updateCompany, deleteCompany };
