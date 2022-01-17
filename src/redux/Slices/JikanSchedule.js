import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const jikanscheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    dataRequested: (state) => {
      state.loading = true;
    },

    dataReceived: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },

    dataRequestFailed: (state) => {
      state.loading = false;
    },
  },
});

export default jikanscheduleSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } =
  jikanscheduleSlice.actions;

export const fetchJikanAnimeSchedule = (day) => (dispatch) => {
  const url = `https://api.jikan.moe/v3/schedule`;
  return dispatch(
    apiCallStart({
      url,
      onStart: dataRequested.type,
      onSuccess: dataReceived.type,
      onError: dataRequestFailed.type,
    })
  );
};
