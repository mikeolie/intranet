import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import apiUrl from "../constants/apiUrl";
import { POST_REQUEST } from "../common/types";

const baseApiUrl = `${apiUrl}/posts`;

export const GET_POST = "GET_POST";
export const getPosts = createAsyncThunk(GET_POST, async () => {
  const res: AxiosResponse = await axios.get(baseApiUrl);
  return res.data;
});

export const CREATE_POST = "CREATE_POST";
export const createPosts = createAsyncThunk(
  CREATE_POST,
  async (postData: POST_REQUEST) => {
    const res: AxiosResponse = await axios.post(baseApiUrl, postData);
    return res.data;
  }
);

export const clearPosts = createAsyncThunk("CLEAR_POSTS", async () => null);
