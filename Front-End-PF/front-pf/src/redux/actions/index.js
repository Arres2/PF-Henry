import {
  GET_ALL_EXCURSION,
  GET_ALL_RESERVATIONS,
  GET_ALL_PACKS,
  GET_ALL_USERS_INFO,
  PATCH_USER,
  DELETE_RESERVATION,
  DELETE_USER_INFO,
  GET_USER_FOR_ADMIN,
  SET_PROFILE_OPTIONS,
  GET_ALL_HOTEL,
  GET_PACK_BY_ID,
  SET_USER,
} from "./actionsTypes";

import * as services from "../../services/services";

import data from "../../data.json";

const axios = require("axios");

// ------------------------USER ACTIONS ------------------------

export function setUserInfo(getToken, email, picture, name, isVerified) {
  return async (dispatch) => {
    try {
      const token = await getToken();
      console.log(await token);

      let response = await services.getUserInformation(
        await token,
        email,
        picture,
        name,
        isVerified
      );
      return dispatch({ type: SET_USER, payload: response });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateUser(getToken, payload) {
  return async (dispatch) => {
    try {
      const token = await getToken();
      let response = await services.patchUser(token, payload);

      return dispatch({
        type: PATCH_USER,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function cancelReservation(getToken, payload) {
  return async (dispatch) => {
    try {
      const token = await getToken();
      await services.deleteReserv(payload, token);
      let response = await services.getAllReservs(token);
      return dispatch({
        type: DELETE_RESERVATION,
        payload: response.data.orders,
      });
    } catch (error) {
      if (error?.response?.data?.msg === "There are no orders") {
        return dispatch({
          type: DELETE_RESERVATION,
          payload: [],
        });
      }
    }
  };
}

//----------------------ADMIN ACTIONS-------------------------------

export function getAdminUsers(token, email) {
  return async (dispatch) => {
    try {
      let response = await services.getAllUsersInfo(token, email);
      return dispatch({
        type: GET_ALL_USERS_INFO,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function deleteUser(token, payload) {
  return async (dispatch) => {
    try {
      const response = await services.deleteUserInfo(payload, token);

      return dispatch({
        type: DELETE_USER_INFO,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserForAdmin(getToken, email) {
  return async (dispatch) => {
    try {
      if (email) {
        const token = await getToken();
        let response = await services.getUserInformation(token, email);
        return dispatch({ type: GET_USER_FOR_ADMIN, payload: response.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllReservations(getToken, id) {
  return async (dispatch) => {
    try {
      const token = await getToken();
      let response = await services.getAllReservs(token, id);
      return dispatch({
        type: GET_ALL_RESERVATIONS,
        payload: response.data.order
          ? [response.data.order]
          : response.data.orders,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: GET_ALL_RESERVATIONS,
        payload: [],
      });
    }
  };
}

export function setProfileOptions(payload) {
  return {
    type: SET_PROFILE_OPTIONS,
    payload,
  };
}

export function getAllPacks() {}

// ----------------------- PACKS ACTIONS--------------------

export function getHotels() {
  return async (dispatch) => {
    axios("http://localhost:5000/Hotel")
      .then((res) => dispatch({ type: GET_ALL_HOTEL, payload: res.data }))
      .catch((error) => console.log(error));
  };
}

export function getExcursiones() {
  return async (dispatch) => {
    axios("http://localhost:5000/excursiones")
      .then((res) => dispatch({ type: GET_ALL_EXCURSION, payload: res.data }))
      .catch((error) => console.log(error));
  };
}

export const getPackById = (packId) => async (dispatch) => {
  const pack = await data.filter((pack) => pack.id === packId);
  console.log(pack);
  return dispatch({ type: GET_PACK_BY_ID, payload: pack });
};
