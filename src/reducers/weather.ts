import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { getWeather } from "../actions/weather";
import { WEATHER_RES } from "../common/types";

interface WEATHER_INITIAL_STATE {
  description: string;
  icon: string;
  temp: number;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: any;
}

const initialState: WEATHER_INITIAL_STATE = {
  description: "",
  icon: "",
  temp: 0,
  status: "idle",
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},

  extraReducers(builder: ActionReducerMapBuilder<WEATHER_INITIAL_STATE>) {
    builder.addCase(getWeather.rejected, (_state, action) => ({
      ...initialState,
      status: "failed",
      error: action,
    }));
    builder.addCase(getWeather.fulfilled, (state, action) => {
      const weatherRes = action.payload as WEATHER_RES;
      state.description = weatherRes.weather_description
      state.icon = weatherRes.icon_url
      state.temp = weatherRes.current_temp
      return state
    });
  },
});

export default weatherSlice.reducer;
