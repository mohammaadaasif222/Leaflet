import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountires = createAsyncThunk("data/getData", async (country) => {
  return fetch(`https://restcountries.com/v3.1/name/${country}`).then((res) => res.json());
});

const initialState = {
  countries: [],
  loading: false,
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers:{},
  extraReducers: {
    [fetchCountires.pending]: (state, action) => {
     state.loading = true;
    },
    [fetchCountires.fulfilled]: (state, action) => {
      state.loading = false;
      state.countries = action.payload;
    },
    [fetchCountires.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export default dataSlice.reducer;
