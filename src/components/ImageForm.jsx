"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import RenderImage from "./RenderImage";
import UploadBtn from "./UploadBtn";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import CompressedImageSettings from "./CompressedImageSettings";

const ImageForm = () => {
  const {
    register,
    reset,
    watch,
    formState: { errors, isSubmitting, isLoading, isSubmitSuccessful },
    setValue,
    clearErrors,
  } = useForm();
  const imageInputRef = useRef(null);
  const t = useTranslations("");
  const openGallery = () => {
    imageInputRef.current.click();
  };

  return (
    <Provider store={store}>
      <div className="container mx-auto flex items-center justify-center flex-col min-h-dvh py-12 sm:px-0 px-5 space-y-4 sm:space-y-8">
        {" "}
        <h1 className="text-5xl text-center  dark:text-darkMode-primary text-lightMode-primary font-bold">
          {t("title")}
        </h1>
        <div className="w-full md:max-w-[80%] bg-lightMode-background dark:bg-darkMode-background p-5 sm:p-10 space-y-5 rounded-lg">
          {/* <button onClick={openGallery}>Upload</button> */}
          <input
            hidden
            ref={imageInputRef}
            onChange={(e) => {
              setValue("image", e.target.files[0]);
            }}
            type="file"
            accept="image/*"
          />
          <input
            type="text"
            hidden
            {...register("image", {
              // required: t("form.required"),
              // validate: (value) => value?.type?.startsWith("image/"),
            })}
          />
          {errors.image && (
            <p className="dark:text-darkMode-red text-lightMode-red">
              {errors.image.message}
            </p>
          )}

          <div className="space-y-5">
            <RenderImage image={watch("image")} setValue={setValue} />
            {!watch("image") && <UploadBtn openGallery={openGallery} />}
          </div>
          <CompressedImageSettings />
        </div>
      </div>
    </Provider>
  );
};
export default ImageForm;
