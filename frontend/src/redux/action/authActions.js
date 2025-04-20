// actions/authActions.js

export const login = (customerId) => {
    return {
      type: 'LOGIN',
      payload: customerId,  // Pass the customerId when logging in
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
  