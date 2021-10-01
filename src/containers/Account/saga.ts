import { takeLatest, select, call, put } from "redux-saga/effects";
import { Routes } from "../../constants";
import { makeRequest } from "../../utils/request";
import { BACK_URL, firebaseConfig } from "../../variables";
import { setCurrentPage } from "../App/actions";
import { requestSignInError, requestSignInSuccess } from "./actions";
import { ActionsTypes } from "./constants";
import { makeSelectFormData } from "./selectors";
import { AuthFormData, AuthResponse } from "./types";
function* accountSaga() {
  yield takeLatest(ActionsTypes.REQUEST_SIGN_UP, requestSignUp);
  yield takeLatest(ActionsTypes.REQUEST_SIGN_IN, requestSignIn);
}

function* requestSignIn() {
  const formData: AuthFormData = yield select(makeSelectFormData());
  const options = {
    method: "POST",
    url: `${BACK_URL}users/login`,
    responseType: "json",
    data: {
      email: formData.email,
      password: formData.password,
    },
  };
  try {
    const response: AuthResponse = yield call(makeRequest, options);
    console.log("success dispatched sage", response);

    yield put(requestSignInSuccess(response.data.data.user));
    yield put(setCurrentPage(Routes.CHAT));
  } catch (err: any) {
    yield put(requestSignInError(err.message));
  }
}
function* requestSignUp() {
  const formData: AuthFormData = yield select(makeSelectFormData());
  const options = {
    method: "POST",
    url: `${BACK_URL}users`,
    responseType: "json",
    data: {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    },
  };
  try {
    const response: AuthResponse = yield call(makeRequest, options);
    yield put(setCurrentPage(Routes.SIGN_IN));
  } catch (err) {
    console.log("catcher error", err);
  }
}
export default accountSaga;
