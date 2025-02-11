"use client";

import {
  updateSettingMaxSizeMB,
  updateSettingQuality,
} from "@/store/features/settingSlice";
import { removeNoneNumricValues } from "@/utils/handleNumberInput";
import { useDispatch, useSelector } from "react-redux";

const CompressedImageSettings = ({ onCompress }) => {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  console.log(settings);

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 md:max-w-[50%] mx-auto gap-5">
        <div className="space-y-1 flex flex-col justify-between">
          <label
            htmlFor="max-size "
            className="text-lightMode-primary dark:text-darkMode-primary"
          >
            Image Quality:{" "}
            <span className="font-bold">
              {parseInt(settings.quality * 100)}%
            </span>
          </label>
          <input
            type="range"
            defaultValue={settings.quality ? settings.quality * 100 : 75}
            onChange={(e) => {
              dispatch(updateSettingQuality(e.target.value / 100));
              console.log(e.target.value);
            }}
            min={10}
            max={99}
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="max-size"
            className="text-lightMode-primary dark:text-darkMode-primary"
          >
            Max Size in MB
          </label>
          <input
            inputMode="numeric"
            type="text"
            value={settings.maxSizeMB || ""}
            onChange={(e) => {
              const value = removeNoneNumricValues(e.target.value);
              console.log("value===>", value);

              dispatch(updateSettingMaxSizeMB(value));
            }}
            placeholder="Max size in MB"
            className="rounded-md  px-3  border outline-none "
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={onCompress}
          type="button"
          className="max-w-[600px] px-4 py-2 mx-auto w-full bg-lightMode-darkGreen rounded-md text-lightMode-primary dark:bg-lightMode-green dark:hover:bg-darkMode-green text-white/80 font-semibold text-lg "
        >
          Compress
        </button>
      </div>
    </div>
  );
};
export default CompressedImageSettings;
