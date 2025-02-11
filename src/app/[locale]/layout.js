import Navbar from "@/components/ThemeChanger";
import "../globals.css";
import ThemeChanger from "@/components/ThemeChanger";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import ReduxProvider from "@/components/providers/ReduxProvider";

export default async function LocaleLayout({ children, params }) {
  // Ensure `params` is awaited if necessary
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="dark:bg-darkMode-websiteBackground bg-lightMode-websiteBackground">
        <ReduxProvider>
          <NextIntlClientProvider messages={messages}>
            <LocaleSwitcher currentLocale={locale} />
            {children}

            <ThemeChanger />
          </NextIntlClientProvider>
        </ReduxProvider>{" "}
      </body>
    </html>
  );
}
