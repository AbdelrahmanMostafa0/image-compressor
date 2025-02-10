"use client";

import { updateSettingQuality } from "@/store/features/settingSlice";
import { useDispatch, useSelector } from "react-redux";

const CompressedImageSettings = () => {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  console.log(settings);

  return (
    <div className="">
      <div className="grid grid-cols-3">
        <input
          type="range"
          defaultValue={settings.quality ? settings.quality * 100 : 75}
          onChange={(e) => {
            dispatch(updateSettingQuality(e.target.value));
            console.log(e.target.value);
          }}
          min={1}
          max={100}
        />
      </div>
    </div>
  );
};
export default CompressedImageSettings;
