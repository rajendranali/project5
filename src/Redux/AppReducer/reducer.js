import * as types from "./actionTypes";
const init = {
  resturant: [],
  isLoading: false,
  isError: false,
  cart:[]
};
const reducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_RESTURANT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_RESTURANT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        resturant: payload,
      };
    case types.GET_RESTURANT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.ADD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart:payload,
      };
    case types.ADD_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
export { reducer };
