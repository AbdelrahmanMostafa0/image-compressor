import ElementContainer from "@/components/ElementContainer";
import ImageForm from "@/components/ImageForm";

// export const metadata = {
//   title: "Image Compressor",
//   description: "Home page",
// };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const metadataByLocale = {
    en: {
      title: "Squash It",
      description:
        "Compress your images quickly and efficiently with Squash It.",
    },
    ar: {
      title: "إكبسها",
      description: "قم بضغط صورك بسرعة وكفاءة باستخدام إكبسها.",
    },
  };
  return metadataByLocale[locale] || metadataByLocale["en"];
}

export default async function Home({ params }) {
  const { locale } = await params;

  return (
    <div className=" h-dvh ">
      {/* <ElementContainer> */}
      <ImageForm locale={locale} />
      {/* </ElementContainer> */}
    </div>
  );
}
