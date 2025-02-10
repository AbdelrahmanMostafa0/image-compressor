import { Trash2 } from "lucide-react";
import Image from "next/image";

const RenderImage = ({ image, setValue }) => {
  const deleteCurrentImage = () => setValue("image", "");
  if (image) {
    return (
      <div className="relative w-fit mx-auto">
        <button
          onClick={deleteCurrentImage}
          type="button"
          className="absolute w-8 h-8 rounded-full bg-lightMode-darkRed hover:bg-lightMode-red dark:bg-darkMode-red dark:hover:bg-darkMode-lightRed text-white duration-150 flex items-center justify-center right-4 top-4"
        >
          <Trash2 width={20} />
        </button>
        <img
          alt="image to compress"
          src={URL.createObjectURL(image)}
          className="object-cover w-full md:w-fit  mx-auto md:max-h-[600px] rounded-md"
        />
      </div>
    );
  } else {
    return (
      <div className="h-[200px] md:h-[500px] justify-center items-center flex">
        <Image
          src={"/upload-image.png"}
          alt="image to compress"
          width={1000}
          height={600}
          className="w-fit max-h-[600px]"
        />
      </div>
    );
  }
};
export default RenderImage;
