import { PRODUCTS } from "../../../graphql/queries";
import { useQuery } from "@apollo/client";

const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: "FETCH_PRODUCTS_PRODUCTS",
    payload: products,
  };
};

const fetchProductsFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    const { data, error } = useQuery(PRODUCTS);
    dispatch(fetchProductsRequest());

    data
      ? dispatch(fetchProductsSuccess(data.products))
      : error && dispatch(fetchProductsFailure(error));
      
  };
};
