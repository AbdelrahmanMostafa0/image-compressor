import { LoaderCircle } from "lucide-react";

const ImageLoading = ({ width, hieght }) => {
  const imageWidth = `${width}px`;
  const ImageHieght = `${hieght}px`;
  return (
    <div
      style={{
        height: ImageHieght,
        width: imageWidth,
      }}
      className={`max-h-[200px] mx-auto md:max-h-[500px]  grid place-content-center max-w-full bg-lightMode-grayBackground dark:bg-darkMode-secondary animate-pulse aspect-[${imageWidth}/${ImageHieght}] rounded-md w-[${width}px]`}
    >
      <LoaderCircle className="animate-spin text-lightMode-green dark:text-darkMode-green" />
    </div>
  );
};
export default ImageLoading;
