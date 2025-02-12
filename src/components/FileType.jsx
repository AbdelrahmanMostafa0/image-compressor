"use Client";

import { updateSettingImageFormat } from "@/store/features/settingSlice";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const fileTypes = ["jpg", "png", "webp"];

const FileType = ({ watch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const getFileType = () => {
    if (
      watch("image").type === "image/jpeg" ||
      watch("image").type === "image/jpg"
    ) {
      return "image/jpg";
    } else if (watch("image").type === "image/png") {
      return "image/png";
    } else if (watch("image").type === "image/webp") {
      return "image/webp";
    } else {
      return "image/jpg";
    }
  };
  useEffect(() => {
    if (watch("image")) {
      const type = getFileType();
      dispatch(updateSettingImageFormat(type));
    }
  }, [watch("image")]);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <div className="flex flex-col justify-between gap-1 w-full">
      <p className="text-lightMode-primary dark:text-darkMode-primary">
        {t("ImageFormat")}
      </p>
      <div ref={menuRef} className="relative ">
        <button
          onClick={toggleMenu}
          className="w-full  px-2 rounded-md flex items-center justify-between h-8 border-slate-300 border bg-white text-lightMode-primary"
        >
          <span className="font-medium">
            {" "}
            {settings.imageFormat.split("/")[1]}
          </span>{" "}
          <ChevronDown className={`${isOpen && "rotate-180 "} duration-150`} />
        </button>
        {isOpen && (
          <div className="w-full absolute  border z-[5] rounded-md mt-1 bg-white drop-shadow-md">
            {fileTypes.map((type, i, types) => {
              const last = i + 1 === types.length;
              return (
                <button
                  key={type}
                  onClick={() => {
                    dispatch(updateSettingImageFormat(`image/${type}`));
                    setIsOpen(false);
                  }}
                  className={`w-full  py-1 hover:bg-lightMode-websiteBackground duration-150 px-4 text-center hover:bg-lightMode-blue t ${
                    !last && "border-b"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default FileType;
