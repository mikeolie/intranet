import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { clearPosts, getPosts } from "../actions/posts";
import { POST } from "../common/types";

interface POSTS_INITIAL_STATE {
  posts: Array<POST>;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: any;
}

const initialState: POSTS_INITIAL_STATE = {
  posts: [],
  status: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers(builder: ActionReducerMapBuilder<POSTS_INITIAL_STATE>) {
    builder.addCase(getPosts.rejected, (_state, action) => ({
      ...initialState,
      status: "failed",
      error: action,
    }));
    builder.addCase(getPosts.fulfilled, (_state, action) => ({
      posts: action.payload.data,
      error: null,
      status: "succeeded",
    }));
    builder.addCase(clearPosts.fulfilled, (state) => ({ ...initialState }));
  },
});

export default postsSlice.reducer;
