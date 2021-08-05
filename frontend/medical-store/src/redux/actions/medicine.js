import {
  MEDS_ERROR,
  LOAD_MEDS,
  DELETE_MED,
  DELETE_MED_ERROR,
  UPDATE_MED,
  ADD_MED,
} from "./action.types";
import { AXIOS_CLIENT } from "../../api/axios.config";
import { setAlert } from "./alert";

const loadMeds = () => async (dispatch) => {
  try {
    const res = await AXIOS_CLIENT.get("medicine/");
    dispatch({ type: LOAD_MEDS, payload: res.data });
  } catch (error) {
    dispatch({ type: MEDS_ERROR });
  }
};

const addMed = (data, history) => async (dispatch) => {
  try {
    const res = await AXIOS_CLIENT.post("medicine/", data);
    dispatch({ type: ADD_MED, payload: res.data?.RECORD });
    dispatch(setAlert(res.data?.MSG, "success"));
    history.push("/medicines");
  } catch (error) {
    if (error) {
      dispatch(setAlert("Operation Failed !", "danger"));
    }
  }
};

const updateMed = (data, history) => async (dispatch) => {
  try {
    const res = await AXIOS_CLIENT.put("medicine/", data);
    dispatch({ type: UPDATE_MED, payload: res.data?.RECORD });
    dispatch(setAlert(res.data?.MSG, "success"));
    history.push("/medicines");
  } catch (error) {
    console.log(error.response);
    if (error) {
      dispatch(setAlert("Operation Failed !", "danger"));
    }
  }
};

const deleteMed = (data, history, currentMeds) => async (dispatch) => {
  dispatch({ type: DELETE_MED, payload: data });

  try {
    const res = await AXIOS_CLIENT.delete("medicine/", { data });
    dispatch(setAlert(res.data?.MSG, "success"));
  } catch (error) {
    if (error) {
      dispatch({ type: DELETE_MED_ERROR, payload: currentMeds });
      dispatch(setAlert("Operation Failed !", "danger"));
    }
  }
};

export { loadMeds, addMed, updateMed, deleteMed };
