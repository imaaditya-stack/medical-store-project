import {
  LOAD_STORES,
  STORES_ERROR,
  DELETE_STORE,
  DELETE_STORE_ERROR,
  ADD_STORE,
  UPDATE_STORE,
  DELETE_MED,
  LOGOUT,
} from "./action.types";
import { AXIOS_CLIENT } from "../../api/axios.config";
import { setAlert } from "./alert";

const loadStores = () => async (dispatch) => {
  try {
    const res = await AXIOS_CLIENT.get("store/");
    dispatch({ type: LOAD_STORES, payload: res.data });
  } catch (error) {
    dispatch({ type: STORES_ERROR });
  }
};

const addStore = (data, history) => async (dispatch) => {
  try {
    const res = await AXIOS_CLIENT.post("store/", data);
    dispatch({ type: ADD_STORE, payload: res.data?.RECORD });
    dispatch(setAlert(res.data?.MSG, "success"));
    history.push("/stores");
  } catch (error) {
    if (error) {
      if (error.response.status === 400) {
        if (error.response.data.username) {
          dispatch(setAlert(error.response.data.username, "danger"));
        }
      }
    }
  }
};

const updateStore = (data, history) => async (dispatch) => {
  try {
    const res = await AXIOS_CLIENT.put("store/", data);
    dispatch({ type: UPDATE_STORE, payload: res.data?.RECORD });
    dispatch(setAlert(res.data?.MSG, "success"));
    history.push("/stores");
  } catch (error) {
    if (error) {
      console.log(error.response);
      if (error.response?.status === 400) {
        if (error.response?.data.username) {
          dispatch(setAlert(error.response.data.username, "danger"));
        }
      } else {
        dispatch(setAlert("Operation Failed !", "danger"));
      }
    }
  }
};

const deleteStore = (data, history, currentstores) => async (dispatch) => {
  dispatch({ type: DELETE_STORE, payload: data });
  dispatch({ type: DELETE_MED, payload: { id: data.id, storeDeleted: true } });
  try {
    const res = await AXIOS_CLIENT.delete("store/", { data });
    dispatch(setAlert(res.data?.MSG, "success"));
  } catch (error) {
    if (error) {
      if (error.response?.status === 401) {
        dispatch({ type: LOGOUT });
      } else {
        dispatch({ type: DELETE_STORE_ERROR, payload: currentstores });
        dispatch(setAlert("Operation Failed !", "danger"));
      }
    }
  }
};

export { loadStores, addStore, updateStore, deleteStore };
