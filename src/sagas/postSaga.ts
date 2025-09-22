import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
} from "../slices/postSlices";

interface AppProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function fetchProductsApi() {
  return axios.get<AppProps[]>("https://jsonplaceholder.typicode.com/posts");
}

function* fetchProducts() {
  try {
    const response: { data: any[] } = yield call(fetchProductsApi);
    yield put(fetchProductsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchProductsFailure(error.message));
  }
}

export default function* productsSaga() {
  yield takeLatest(fetchProductsRequest.type, fetchProducts);
}
