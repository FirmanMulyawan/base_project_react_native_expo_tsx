import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Posts, PostsState } from "../types/types";

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
  selectedPost: null,
  searchQuery: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess(state, action: PayloadAction<Posts[]>) {
      state.posts = action.payload;
      state.loading = false;
    },
    fetchPostsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    selectedPost(state, action: PayloadAction<Posts>) {
      state.selectedPost = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  selectedPost,
  setSearchQuery,
} = postsSlice.actions;

export default postsSlice.reducer;
