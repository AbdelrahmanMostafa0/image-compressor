import { useTranslations } from "next-intl";

export const metadata = {
  title: "Image Compressor",
  description: "Home page",
};

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="">
      <h1>{t("title")}</h1>
    </div>
  );
}
