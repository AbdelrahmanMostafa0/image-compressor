"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import RenderImage from "./RenderImage";
import UploadBtn from "./UploadBtn";
import { store } from "@/store/store";
import { Provider, useSelector } from "react-redux";
import CompressedImageSettings from "./CompressedImageSettings";
import { compressImage } from "@/utils/compressImage";
import CompressedImage from "./CompressedImage";
import ImageLoading from "./ImageLoading";

const ImageForm = ({ locale }) => {
  const settings = useSelector((state) => state.settings);
  const [loading, setLoading] = useState(false);
  const [ImageHieght, setImageHieght] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const {
    register,
    reset,
    watch,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm();
  const imageInputRef = useRef(null);
  const imageContainerRef = useRef(null);
  const t = useTranslations("");
  const openGallery = () => {
    imageInputRef.current.click();
  };
  const CreateCompressedImage = async () => {
    setLoading(true);
    // Compress the image
    const compressedFile = await compressImage({
      file: watch("image"),
      maxSizeMB: settings.maxSizeMB,
      quality: settings.quality,
      fileType: settings.imageFormat,
    });
    setLoading(false);

    if (compressedFile) {
      setValue("compressedImage", compressedFile);
    }
  };

  useEffect(() => {
    const selectedImage = watch("image");

    if (selectedImage) {
      // Ensure file is present
      const imageUrl = selectedImage ? URL.createObjectURL(selectedImage) : "";
      const img = new window.Image();

      img.onload = function () {
        setImageHieght(img.height);
        setImageWidth(img.width);

        URL.revokeObjectURL(imageUrl);
      };
      img.src = imageUrl;
    }
  }, [watch("image")]);
  const handleReset = () => {
    reset();
    setValue("image", null);
  };
  useEffect(() => {
    if (loading) {
      imageContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [loading]);
  return (
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
            const file = e.target.files[0];

            setValue("image", file);
          }}
          type="file"
          accept="image/*"
        />

        {errors.image && (
          <p className="dark:text-darkMode-red text-lightMode-red">
            {errors.image.message}
          </p>
        )}

        <div className="space-y-5">
          <RenderImage
            image={watch("image")}
            reset={handleReset}
            setValue={setValue}
          />
          {!watch("image") && <UploadBtn openGallery={openGallery} />}
        </div>
        {watch("image") && (
          <CompressedImageSettings
            loading={loading}
            locale={locale}
            watch={watch}
            onCompress={CreateCompressedImage}
          />
        )}
        <div ref={imageContainerRef}>
          {loading && <ImageLoading width={imageWidth} hieght={ImageHieght} />}
          {!loading && watch("compressedImage") && (
            <CompressedImage watch={watch} />
          )}
        </div>
      </div>
    </div>
  );
};
export default ImageForm;
