// addToCart just adds a product with qty: 1
export const addToCart = (product) => ({
    type: "ADD_TO_CART",
    payload: {
      ...product,
      qty: 1,
    },
  });
  
  export const updateCartItem = (product) => ({
    type: "UPDATE_CART_ITEM",
    payload: product,
  });
  
  export const deleteFromCart = (product) => ({
    type: "DELETE_FROM_CART",
    payload: product,
  });
  