"use client";

import {
  updateSettingMaxSizeMB,
  updateSettingQuality,
} from "@/store/features/settingSlice";
import { removeNoneNumricValues } from "@/utils/handleNumberInput";
import { useDispatch, useSelector } from "react-redux";
import FileType from "./FileType";
import { useTranslations } from "next-intl";

const CompressedImageSettings = ({ onCompress, watch, locale, loading }) => {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const t = useTranslations("");

  return (
    <div dir={locale === "en" ? "ltr" : "rtl"} className="space-y-4">
      <div className="grid md:grid-cols-3 md:max-w-[800px] mx-auto gap-5 justify-items-center">
        <div className="space-y-1 flex flex-col justify-between w-full">
          <label
            htmlFor="max-size "
            className="text-lightMode-primary dark:text-darkMode-primary"
          >
            {t("ImageQuality")}:{" "}
            <span className="font-bold">
              {parseInt(settings.quality * 100)}%
            </span>
          </label>
          <div className="h-full flex items-center">
            <input
              className="w-full"
              type="range"
              defaultValue={settings.quality ? settings.quality * 100 : 75}
              onChange={(e) => {
                dispatch(updateSettingQuality(e.target.value / 100));
              }}
              min={10}
              max={99}
            />
          </div>
        </div>
        <div className="space-y-1 w-full flex justify-between flex-col">
          <label
            htmlFor="max-size"
            className="text-lightMode-primary dark:text-darkMode-primary"
          >
            {t("MaxSize")}
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
          disabled={loading}
          type="button"
          className="max-w-[600px] disabled:opacity-75 px-4 py-2 mx-auto w-full bg-lightMode-darkGreen rounded-md text-lightMode-primary dark:bg-lightMode-green dark:hover:bg-darkMode-green text-white/80 font-semibold text-lg "
        >
          {t("SquashIt")}
        </button>
      </div>
    </div>
  );
};
export default CompressedImageSettings;
