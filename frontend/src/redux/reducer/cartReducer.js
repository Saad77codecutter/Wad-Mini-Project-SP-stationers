const cartReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const existingItem = state.find(item => item.code === action.payload.code);
  
        if (existingItem) {
          return state.map(item =>
            item.code === action.payload.code
              ? { ...item, qty: item.qty + action.payload.qty }
              : item
          );
        } else {
          return [...state, action.payload];
        }
  
      case "UPDATE_CART_ITEM":
        return state.map(item =>
          item.code === action.payload.code ? action.payload : item
        );
  
      case "DELETE_FROM_CART":
        return state.filter(item => item.code !== action.payload.code);
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  