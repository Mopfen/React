const initialState = {
    isLoading: false,
    isError: false,
    errorCode: 666,
    email: '',
    password: ''
  };
  
  export const Common = (state = initialState, action) => {
    switch (action.type) {
      case 'LOADING_STATUS_CHANGED':
        return {
          ...state,
          isLoading: action.bool
        }
      case 'ERROR_STATUS_CHANGED':
        return {
          ...state,
          isError: action.bool,
          errorCode: action.error
        }
      case 'LOGIN_DATA_CHANGED':
        return {
          ...state,
          email: action.email,
          password: action.password
        }
      case 'TOKEN_NEEDED':
        localStorage.setItem('token', action.data.token); return state;
      default:
        return state
    }
  }