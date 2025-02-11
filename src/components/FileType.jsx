"use Client";

import { updateSettingImageFormat } from "@/store/features/settingSlice";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const fileTypes = ["jpg", "png", "webp"];

const FileType = ({ watch }) => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="flex flex-col justify-between w-full">
      <p>image Format</p>
      <div ref={menuRef} className="relative ">
        <button
          onClick={toggleMenu}
          className="w-full border p-2 rounded-md flex items-center justify-between h-7"
        >
          <span> {settings.imageFormat.split("/")[1]}</span> <ChevronDown />
        </button>
        {isOpen && (
          <div className="w-full absolute  border bg-white drop-shadow-md">
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
