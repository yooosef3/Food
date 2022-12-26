const initialState = {
  loading: false,
  products: [],
  error: "",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCTS_PRODUCTS":
      return {
        loading: false,
        products: action.payload,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;