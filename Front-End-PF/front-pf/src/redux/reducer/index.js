import { ActionTypes } from "@mui/base";
import {validateCarrito} from "../validations/validations"
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
} from "../actions/actionsTypes";

const initialState = {
  carousel: [],
  hotels: [],
  packs: [],
  currentUser: {},
  packById: {},
  carrito: [],
  verifyPurchase: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HOTEL:
      return {
        ...state,
        hotels: action.payload,
      };
    case GET_CAROUSEL:
      return {
        ...state,
        carousel: action.payload,
      };
    case GET_ALL_EXCURSION:
      return {
        ...state,
        excursiones: action.payload,
      };

    case GET_PACKS:
      return {
        ...state,
        packs: action.payload,
      };

    case SET_BUY:
      let temp = validateCarrito(state.carrito, action.payload);
      return {
        ...state,
        carrito: temp ? [...state.carrito, action.payload] : state.carrito,
      };

    case VERIFY_ORDER:
      return {
        ...state,
        verifyPurchase: action.payload,
      };
    case SET_USER:
      console.log(state);
      return {
        ...state,
        currentUser: action.payload,
      };
    case GET_PACK_BY_ID:
      console.log(action.payload);
      return {
        ...state,
        packById: action.payload,
      };
    // case USER_LOGIN:
    //   return {
    //     ...state,
    //     loginAccess: action.payload,
    //   };
    // case USER_LOGOUT:
    //   return {
    //     ...state,
    //     loginAccess: {},
    //   };
    default:
      return {
        ...state,
      };
  }
};
