const baseURL =
  "https://images.unsplash.com/photo-1510130146128-7a7b6afb6f9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1";
const minifyParams = "&fm=webp&fit=crop&w=50&q=50&blur=50";
const optimizedParams = "&fm=webp&w=1200&fit=crop&q=75";

export const asideImageProps = {
  imageURL: baseURL + optimizedParams,
  blurURL: baseURL + minifyParams,
  alt: "Chat illustration - by Volodymyr Hryshchenko on Unsplash",
};

export const formFields = {
  name: "name",
  email: "email",
  password: "password",
  confirm_password: "confirm_password",
}

export const FORM_FIELDS_ERROR = "Error, please fill the missing fields";
export const FORM_FIELDS_SUCCESS = "Success, you will be redirected in few seconds";

export enum ActionsTypes {
  REQUEST_SIGN_UP = "REQUEST_SIGN_UP",
  REQUEST_SIGN_UP_SUCCESS = "REQUEST_SIGN_UP_SUCCESS",
  REQUEST_SIGN_UP_ERROR = "REQUEST_SIGN_UP_ERROR",

  REQUEST_SIGN_IN = "REQUEST_SIGN_IN",
  REQUEST_SIGN_IN_SUCCESS = "REQUEST_SIGN_IN_SUCCESS",
  REQUEST_SIGN_IN_ERROR = "REQUEST_SIGN_IN_ERROR",

  REQUEST_SIGN_OUT = "REQUEST_SIGN_OUT",
  REQUEST_SIGN_OUT_SUCCESS = "REQUEST_SIGN_OUT_SUCCESS",
  REQUEST_SIGN_OUT_ERROR = "REQUEST_SIGN_OUT_ERROR",

  SET_FORM_DATA = "SET_FORM_DATA",
}
