import { createSlice } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';

export interface ThemeState {
  theme: number;
}

const initialState: ThemeState = {
    theme: 1
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme =  (state.theme % 3) + 1;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
