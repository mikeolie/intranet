import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import apiUrl from "../constants/apiUrl";

const baseApiUrl = `${apiUrl}/weather`;

export const GET_WEATHER = "GET_WEATHER";
export const getWeather = createAsyncThunk(GET_WEATHER, async () => {
  const res: AxiosResponse = await axios.get(baseApiUrl);
  return res.data;
});
