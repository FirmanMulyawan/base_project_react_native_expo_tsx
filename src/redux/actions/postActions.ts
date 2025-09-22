import { Posts } from "../types/types";
// Action types
export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";
export const SELECT_POST = "SELECT_POST";

// Action interfaces
interface FetchPostRequestAction {
  type: typeof FETCH_POST_REQUEST;
}

interface FetchPostSuccessAction {
  type: typeof FETCH_POST_SUCCESS;
  payload: Posts[];
}

interface FetchPostFailureAction {
  type: typeof FETCH_POST_FAILURE;
  payload: string;
}

interface SelectPostAction {
  type: typeof SELECT_POST;
  payload: Posts;
}

// Combine Action Types
export type PostActionTypes =
  | FetchPostRequestAction
  | FetchPostSuccessAction
  | FetchPostFailureAction
  | SelectPostAction;

// Action creators
export const fetchPostRequest = (): PostActionTypes => ({
  type: FETCH_POST_REQUEST,
});

export const fetchPostSuccess = (posts: Posts[]): PostActionTypes => ({
  type: FETCH_POST_SUCCESS,
  payload: posts,
});

export const fetchPostFailure = (error: string): PostActionTypes => ({
  type: FETCH_POST_FAILURE,
  payload: error,
});

export const selectPost = (post: Posts): PostActionTypes => ({
  type: SELECT_POST,
  payload: post,
});
