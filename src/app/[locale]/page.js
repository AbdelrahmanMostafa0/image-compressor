import ImageForm from "@/components/ImageForm";

export const metadata = {
  title: "Image Compressor",
  description: "Home page",
};

export default function Home() {
  return (
    <div className=" h-dvh ">
      <ImageForm />
    </div>
  );
}
