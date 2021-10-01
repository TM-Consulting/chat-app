import { takeLatest, call, put } from "redux-saga/effects";
import { User } from "../../types";
import { makeRequest } from "../../utils/request";
import { BACK_URL } from "../../variables";
import { AuthResponse } from "../Account/types";
import { requestUsersError, requestUsersSuccess } from "./actions";
import { ActionsTypes } from "./constants";

function* dialogSaga() {
  yield takeLatest(ActionsTypes.REQUEST_USERS_LIST, requestUsers);
}
function* requestUsers() {
  const options = {
    method: "GET",
    url: `${BACK_URL}users/all`,
    responseType: "json",
  };
  try {
    const response: AuthResponse = yield call(makeRequest, options);
    console.log("get usersss", response);
    yield put(requestUsersSuccess(response.data));
  } catch (err) {
    yield put(requestUsersError());
  }
}

export default dialogSaga;
