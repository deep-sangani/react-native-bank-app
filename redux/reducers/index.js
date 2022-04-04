import {LOGIN, SETMOBILE} from '../constants';

const initialState = {
  user: {
    name: '',
    email: '',
    mobile: '',
  },
  auth: {
    isAuthenticated: false,
    token: '',
  },
};

const rootreducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        auth: {
          isAuthenticated: true,
          token: action.payload.token,
        },
      };
    }
    case SETMOBILE: {
      return {
        ...state,
        user: {
          ...state.user,
          mobile: action.payload.mobile,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default rootreducer;
