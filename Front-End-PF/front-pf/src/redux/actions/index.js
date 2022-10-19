import {
  GET_ALL_EXCURSION,
  GET_CAROUSEL,
  GET_PACKS,
  PATCH_USER,
  CANCEL_RESERVATION,
  GET_ALL_RESERVATIONS,
  GET_ALL_USERS,
  GET_ALL_HOTEL,
  GET_ACTIVITIES,
  GET_PACK_BY_ID,
  SET_USER,
  SET_BUY,
  VERIFY_ORDER,
} from "./actionsTypes";

import * as services from "../../services/services";

import data from "../../data.json";

const axios = require("axios");
const URL = process.env.REACT_APP_API_SERVER_URL;

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

export function getActivities (country) {
  console.log(country)
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:5000/excursion/findActivityDataCountry?country=${country}`)
    console.log(json)
    return dispatch ({
      type: GET_ACTIVITIES,
      payload: json.data
    })
  }
}

export function setBuy(payload) {
  return async function (dispatch) {
    return dispatch({
      type: SET_BUY,
      payload: payload,
    });
  };
}

export function verifyOrder(payload) {
  return async function (dispatch) {
    let json = await axios.post(`${URL}purchase/purchaseDetail`, {
      data: payload,
    });
    return dispatch({
      type: VERIFY_ORDER,
      payload: json.data,
    });
  };
}

export function getCarousel () {
  return async function (dispatch) {
    let json = await axios.get(`${URL}excursion/carousel`)
    return dispatch({
      type: GET_CAROUSEL,
      payload: json.data
    })
  }
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
        type: CANCEL_RESERVATION,
        payload: response.data.orders,
      });
    } catch (error) {
      if (error?.response?.data?.msg === "There are no orders") {
        return dispatch({
          type: CANCEL_RESERVATION,
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
        type: GET_ALL_USERS,
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
        type: DELETE_USER,
        payload: response.data,
      });
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


// ----------------------- PACKS ACTIONS--------------------

export function getPacks() {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:5000/package/packages`);
    return dispatch({
      type: GET_PACKS,
      payload: json.data,
    });
  };
}

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
