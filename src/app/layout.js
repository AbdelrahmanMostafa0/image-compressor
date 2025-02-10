import Navbar from "@/components/ThemeChanger";
import "./globals.css";
import ThemeChanger from "@/components/ThemeChanger";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-darkMode-websiteBackground bg-lightMode-websiteBackground">
        {children}
        <ThemeChanger />
      </body>
    </html>
  );
}
