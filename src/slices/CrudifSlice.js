import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";
const PostAdapter = createEntityAdapter({
  selectId: (post) => post.id,
});

export const PostSlice = createSlice({
  name: "post",
  initialState: PostAdapter.getInitialState({
    status: "idle",
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchPost.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(FetchPost.fulfilled, (state, action) => {
      let min = 1;
      const loadpost = action.payload.map((item) => {
        item.date = sub(new Date(), { minutes: min++ }).toISOString();
        return item;
      });
      PostAdapter.upsertMany(state, loadpost);
      state.status = "idle";
    });
    builder.addCase(FetchPost.rejected, (state) => {
      state.status = "rejected";
    });
  },
});
const baseUrl = "https://jsonplaceholder.typicode.com/posts";
export const FetchPost = createAsyncThunk("/getPost", async () => {
  const response = await axios.get(baseUrl);
  const result = await response.data;
  return result;
});

export const { selectAll, selectById, selectIds } = PostAdapter.getSelectors(
  (state) => state.post
);

export const PostStatus = (state) => state.post.status;
