import axios from "axios";
import {
  addProductError,
  addProductSuccess,
  deleteProductError,
  deleteProductSuccess,
  getAllProductsError,
  getAllProductsSuccess,
} from "./productsAction";

export const getAllProductsOperations = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://shop-a2177-default-rtdb.firebaseio.com/cars.json`
    );
    if (response.data) {
      const cars = Object.keys(response.data).map((key) => ({
        ...response.data[key],
        id: key,
      }));
      dispatch(getAllProductsSuccess(cars));
    } else return;
  } catch (error) {
    dispatch(getAllProductsError(error.response.data.error.message));
  }
};

export const getProductsOperations = (car) => async (dispatch) => {
  try {
    const respons = await axios.post(
      `https://shop-a2177-default-rtdb.firebaseio.com/cars.json`,
      car
    );
    dispatch(addProductSuccess({ ...car, id: respons.data.name }));
  } catch (error) {
    dispatch(addProductError(error.response.data.error.message));
  }
};

export const deleteProductsOperations = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://shop-a2177-default-rtdb.firebaseio.com/cars/${id}.json`
    );
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductError(error.response.data.error.message));
  }
};
