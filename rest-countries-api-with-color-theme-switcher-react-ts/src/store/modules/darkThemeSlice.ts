import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface darkThemeState {
  isDarkTheme: boolean;
}

const initialState: darkThemeState = {
  isDarkTheme: true,
};

export const darkThemeSlice = createSlice({
  name: "darkTheme",
  initialState,
  reducers: {
    toggleDarkTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleDarkTheme } = darkThemeSlice.actions;
export const darkTheme = (state: RootState) => state.darkTheme.isDarkTheme;

export default darkThemeSlice.reducer;
