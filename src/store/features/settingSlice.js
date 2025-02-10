import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  maxSizeMB: 1,
  quality: 0.75,
  maxWidthOrHeight: 1000,
};

export const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSetting(state) {
      state.quality = 0.5;
    },
  },
});
export const { updateSetting } = settingSlice.actions;
export default settingSlice.reducer;
