
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  GET_GRANTS,
  GET_GRANT,
  ADD_GRANT,
  DELETE_GRANT,
  UPDATE_GRANT,
  GRANT_ERROR,
} from './types';

export const getGrants = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/grants');
    dispatch({
      type: GET_GRANTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GRANT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getGrant = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/grants/${id}`);
    dispatch({
      type: GET_GRANT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GRANT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addGrant = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/grants', formData);
    dispatch({
      type: ADD_GRANT,
      payload: res.data,
    });
    toast.success('Grant added');
  } catch (err) {
    dispatch({
      type: GRANT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    toast.error('Error adding grant');
  }
};

export const deleteGrant = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/grants/${id}`);
    dispatch({
      type: DELETE_GRANT,
      payload: id,
    });
    toast.success('Grant deleted');
  } catch (err) {
    dispatch({
      type: GRANT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    toast.error('Error deleting grant');
  }
};

export const updateGrant = (id, formData) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/grants/${id}`, formData);
    dispatch({
      type: UPDATE_GRANT,
      payload: res.data,
    });
    toast.success('Grant updated');
  } catch (err) {
    dispatch({
      type: GRANT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    toast.error('Error updating grant');
  }
};
