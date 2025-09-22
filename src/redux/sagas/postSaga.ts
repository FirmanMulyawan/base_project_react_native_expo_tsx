import axios, { AxiosResponse } from "axios";
import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPostsFailure,
  fetchPostsRequest,
  fetchPostsSuccess,
} from "../reducers/postSlices";
import { Posts } from "../types/types";

function* fetchPosts(): SagaIterator {
  try {
    const response: AxiosResponse<Posts[]> = yield call(() =>
      axios.get("https://jsonplaceholder.typicode.com/posts"),
    );
    yield put(fetchPostsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchPostsFailure(error.message));
  }
}

export default function* postsSaga(): SagaIterator {
  yield takeLatest(fetchPostsRequest.type, fetchPosts);
}
