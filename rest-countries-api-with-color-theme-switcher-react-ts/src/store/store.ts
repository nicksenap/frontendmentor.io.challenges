import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import darkThemeReducer from "./modules/darkThemeSlice";
import countryDataReducer from "./modules/countryDataSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    darkTheme: darkThemeReducer,
    countryData: countryDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
