import { ActionsTypes } from "./constants";

const setFormData = ( payload: {} ) => {
  return {
    type: ActionsTypes.SET_FORM_DATA,
    payload
  }
}

const requestSignIn = () => {
  return {
    type: ActionsTypes.REQUEST_SIGN_IN,
  };
};

const requestSignInSuccess = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_SIGN_IN_SUCCESS,
    payload,
  };
};

const requestSignInError = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_SIGN_IN_ERROR,
    payload,
  };
};

const requestSignUp = () => {
  return {
    type: ActionsTypes.REQUEST_SIGN_UP,
  };
};

const requestSignUpSuccess = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_SIGN_UP_SUCCESS,
    payload,
  };
};

const requestSignUpError = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_SIGN_UP_ERROR,
    payload,
  };
};

const requestSignOut = () => {
  return {
    type: ActionsTypes.REQUEST_SIGN_OUT,
  };
};

const requestSignOutSuccess = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_SIGN_OUT_SUCCESS,
    payload,
  };
};

const requestSignOutError = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_SIGN_OUT_ERROR,
    payload,
  };
};

export {
  setFormData,
  requestSignIn,
  requestSignInSuccess,
  requestSignInError,
  requestSignUp,
  requestSignUpSuccess,
  requestSignUpError,
  requestSignOut,
  requestSignOutSuccess,
  requestSignOutError,
};
