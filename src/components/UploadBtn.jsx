import { ImageUp } from "lucide-react";

const UploadBtn = ({ openGallery }) => {
  return (
    <button
      onClick={openGallery}
      type="button"
      className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-lightMode-secondary text-lightMode-primary rounded-lg w-full max-w-[600px] mx-auto dark:text-darkMode-primary"
    >
      Upload Image <ImageUp />
    </button>
  );
};
export default UploadBtn;
