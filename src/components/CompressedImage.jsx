import { Download } from "lucide-react";

const CompressedImage = ({ watch }) => {
  const imageUrl = URL.createObjectURL(watch("compressedImage"));
  const imageName = watch("compressedImage").name.split(".")[0] + " compressed";

  return (
    <div className="relative w-fit mx-auto">
      <a
        href={imageUrl}
        download={imageName}
        className="text-white bg-darkMode-websiteBackground hover:bg-darkMode-background duration-100 w-8 h-8 rounded-md flex items-center justify-center absolute top-4 right-5"
      >
        <Download />
      </a>
      <img
        alt="image to compress"
        src={URL.createObjectURL(watch("compressedImage"))}
        className="object-cover w-full md:w-fit  mx-auto md:max-h-[600px] rounded-md"
      />
    </div>
  );
};
export default CompressedImage;
