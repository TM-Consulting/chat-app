import { ActionsTypes, formFields } from "./constants";
import { AuthState } from "./types";

const initialState: AuthState = {
  user: null,
  error: false,
  errorMessage: "",
  formData: {
    email: null,
    password: null,
    name: null,
    confirm_password: null,
  },
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionsTypes.SET_FORM_DATA:
      let formData = null;
      if (action.payload.name == formFields.name) {
        formData = { ...state.formData, name: action.payload.value };
        return { ...state, formData };
      }
      if (action.payload.name == formFields.email) {
        formData = { ...state.formData, email: action.payload.value };
        return { ...state, formData };
      }
      if (action.payload.name == formFields.password) {
        formData = { ...state.formData, password: action.payload.value };
        return { ...state, formData };
      }
      if (action.payload.name == formFields.confirm_password) {
        formData = {
          ...state.formData,
          confirm_password: action.payload.value,
        };
        return { ...state, formData };
      }
      return state;
    case ActionsTypes.REQUEST_SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case ActionsTypes.REQUEST_SIGN_IN_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
        user: null,
      };
    case ActionsTypes.REQUEST_SIGN_UP_SUCCESS:
      return "";
    case ActionsTypes.REQUEST_SIGN_UP_ERROR:
      return "";
    case ActionsTypes.REQUEST_SIGN_OUT_SUCCESS:
      return "";
    case ActionsTypes.REQUEST_SIGN_OUT_ERROR:
      return "";
    default:
      return state;
  }
};

export default authReducer;
