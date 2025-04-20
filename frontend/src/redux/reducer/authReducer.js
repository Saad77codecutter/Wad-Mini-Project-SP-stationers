// authReducer.js

const initialState = {
    isLoggedIn: false,
    customerId: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        localStorage.setItem('customerId', action.payload);
        return { ...state, isLoggedIn: true };
      case 'LOGOUT':
        localStorage.removeItem('customerId');
        return { ...state, isLoggedIn: false };
      default:
        return state;
    }
  };
  
  export default authReducer;
  