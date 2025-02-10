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
    updateSettingQuality(state, action) {
      state.quality = action.payload;
    },
    updateSettingMaxSizeMB(state, action) {
      state.maxSizeMB = action.payload;
    },
    updateSettingMaxWidthOrHeight(state, action) {
      state.maxWidthOrHeight = action.payload;
    },
  },
});
export const {
  updateSettingMaxWidthOrHeight,
  updateSettingQuality,
  updateSettingMaxSizeMB,
} = settingSlice.actions;
export default settingSlice.reducer;
