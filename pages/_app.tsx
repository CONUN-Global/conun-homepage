import type { AppProps } from "next/app";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import Head from "next/head";
import useStore from "@/store/store";
import Layout from "@/components/Layout";

import "./styles/globals.scss";
import { useEffect } from "react";

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
          <meta name="description" content="Conun Foundation" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </I18nProvider>
  );
}
export default MyApp;
