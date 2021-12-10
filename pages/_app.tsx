import { useEffect } from "react";
import type { AppProps } from "next/app";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import Head from "next/head";
import useStore from "@/store/store";
import Layout from "@/components/Layout";

import "./styles/globals.scss";
import Footer from "@/pages/Home/Footer";

export async function activate(locale: string) {
  const { messages } = await import(`../src/locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

function MyApp({ Component, pageProps }: AppProps) {
  const currentLocale = useStore((store) => store.currentLocale);

  useEffect(() => {
    activate(currentLocale.value);
  }, [currentLocale]);

  return (
    <I18nProvider i18n={i18n}>
      <Layout>
        <Head>
          <title>Conun Home page </title>
          <meta
            name="viewport"
            content="width=device-width; initial-scale = 1; maximum-scale=1; user-scalable = no;"
          />
          <link rel="icon" href="/assets/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </I18nProvider>
  );
}
export default MyApp;
