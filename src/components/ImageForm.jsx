"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import RenderImage from "./RenderImage";
import UploadBtn from "./UploadBtn";

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
  //   const t = useTranslations("form");
  const openGallery = () => {
    imageInputRef.current.click();
  };
  //   console.log(URL?.createObjectURL(watch("image")));

  return (
    <div className="container mx-auto flex items-center justify-center flex-col min-h-dvh py-12 sm:px-0 px-5">
      {" "}
      {/* <h1>{t("title")}</h1> */}
      <div className="w-full md:max-w-[80%] bg-lightMode-background dark:bg-darkMode-background p-5 sm:p-10 rounded-lg">
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
      </div>
    </div>
  );
};
export default ImageForm;
