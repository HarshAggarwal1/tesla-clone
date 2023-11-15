import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["model_s", "model_3", "model_x", "model_y"]
};

const middleMenuOpenOptionsSlice = createSlice({
    name: "middleMenuOpenOptions",
    initialState,
    reducers: {},
});

export const selectMiddleMenuOpenOptions = (state) => state.middleMenuOpenOptions.cars;

export default middleMenuOpenOptionsSlice.reducer;