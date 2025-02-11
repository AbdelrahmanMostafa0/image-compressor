"use client";

import {
  updateSettingMaxSizeMB,
  updateSettingQuality,
} from "@/store/features/settingSlice";
import { removeNoneNumricValues } from "@/utils/handleNumberInput";
import { useDispatch, useSelector } from "react-redux";
import FileType from "./FileType";

const CompressedImageSettings = ({ onCompress, watch }) => {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-3 md:max-w-[800px] mx-auto gap-5 justify-items-center">
        <div className="space-y-1 flex flex-col justify-between w-full">
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
            }}
            min={10}
            max={99}
          />
        </div>
        <div className="space-y-1 w-full flex justify-between flex-col">
          <label
            htmlFor="max-size"
            className="text-lightMode-primary dark:text-darkMode-primary"
          >
            Max Size in MB
          </label>
          <div className="w-full flex items-center ">
            <input
              inputMode="numeric"
              type="text"
              value={settings.maxSizeMB || ""}
              onChange={(e) => {
                const value = removeNoneNumricValues(e.target.value);
                dispatch(updateSettingMaxSizeMB(value));
              }}
              placeholder="Max size in MB"
              className="rounded-md  px-3  w-full border outline-none h-8 border-slate-300"
            />
            <span className="text-gray-400 -mx-10">MB</span>
          </div>
        </div>
        <FileType watch={watch} />
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
