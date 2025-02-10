"use client";

import { NextIntlClientProvider } from "next-intl";
import { Provider } from "react-redux";
import store from "@/store/store";

const Providers = ({ children, messages }) => {
  return (
    // <Provider store={store}>
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
    // </Provider>
  );
};

export default Providers;
