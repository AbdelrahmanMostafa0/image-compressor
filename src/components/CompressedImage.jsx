const CompressedImage = ({ watch }) => {
  return (
    <div>
      <img
        alt="image to compress"
        src={URL.createObjectURL(watch("compressedImage"))}
        className="object-cover w-full md:w-fit  mx-auto md:max-h-[600px] rounded-md"
      />
    </div>
  );
};
export default CompressedImage;
