import imageCompression from "browser-image-compression";

export const compressImage = async ({
  file,
  maxSizeMB = 1,
  maxWidthOrHeight = 1000,
  quality = 0.75,
}) => {
  const options = {
    maxSizeMB,
    maxWidthOrHeight,
    quality,
    useWebWorker: true,
  };
  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error("Compression Error:", error);
    return null;
  }
};
