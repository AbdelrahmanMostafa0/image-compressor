import { configureStore } from "@reduxjs/toolkit";
import SettingsReducer from "./features/settingSlice";
export const store = configureStore({
  reducer: {
    settings: SettingsReducer,
  },
});
