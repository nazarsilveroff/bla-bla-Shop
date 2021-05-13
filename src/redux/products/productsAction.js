export const addProduct = (car) => {
  console.log(car);
  return {
    type: "addProduct",
    payload: car,
  };
};

export const deleteProduct = (id) => ({
  type: "deleteProduct",
  payload: id,
});
