import { ImageUp } from "lucide-react";
import { useTranslations } from "next-intl";

const UploadBtn = ({ openGallery }) => {
  const t = useTranslations("");

  return (
    <button
      onClick={openGallery}
      type="button"
      className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-lightMode-secondary text-lightMode-primary rounded-lg w-full max-w-[600px] mx-auto dark:text-darkMode-primary"
    >
      {t("uploadImage")} <ImageUp />
    </button>
  );
};
export default UploadBtn;
