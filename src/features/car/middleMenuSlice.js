import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    middleMenu: ["Vehicles", "Energy", "Charging", "Discover", "Shop"]
};

const middleMenuSlice = createSlice({
    name: "middleMenu",
    initialState,
    reducers: {},
});

export const selectMiddleMenu = (state) => state.middleMenu.middleMenu;

export default middleMenuSlice.reducer;

