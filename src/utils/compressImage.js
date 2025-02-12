import imageCompression from "browser-image-compression";

export const compressImage = async ({
  file,
  maxSizeMB = 1,
  maxWidthOrHeight = 1000,
  quality = 0.75,
  fileType,
}) => {
  const options = {
    maxSizeMB,
    maxWidthOrHeight,
    quality,
    useWebWorker: true,
    fileType: fileType === "image/jpg" ? "image/jpeg" : fileType,
  };
  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error("Compression Error:", error);
    return null;
  }
};
