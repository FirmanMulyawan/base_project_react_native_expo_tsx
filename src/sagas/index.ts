import { all } from "redux-saga/effects";
import productsSaga from "./postSaga";

export default function* rootSaga() {
  yield all([productsSaga()]);
}
