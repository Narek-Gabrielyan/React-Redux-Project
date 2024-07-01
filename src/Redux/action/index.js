// For Add Item to Cart
export const addCart = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
};

// For Delete Item From Cart
export const delCart = (product) => {
  return {
    type: "DEL_ITEM",
    payload: product,
  };
};
