import imageCompression from "browser-image-compression";

export const compressImage = async ({
  file,
  maxSizeMB = 1,
  maxWidthOrHeight = 1000,
  quality = 0.75,
  fileType,
}) => {
  const options = {
    maxSizeMB: isNaN(maxSizeMB) ? 1 : parseInt(maxSizeMB),
    maxWidthOrHeight: isNaN(maxWidthOrHeight)
      ? 1000
      : parseInt(maxWidthOrHeight),
    quality: isNaN(quality) ? 1 : parseInt(quality),
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
