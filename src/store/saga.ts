import { fork } from "redux-saga/effects";
import accountSaga from "../containers/Account/saga";
import dialogSaga from "../containers/DialogFriends/saga";
function* rootSaga() {
  yield fork(accountSaga);
  yield fork(dialogSaga);
}

export default rootSaga;
