import "../globals.css";
import "../home.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "vn" }];
}

const inter = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Korea Grill",
  description: "Deliciousness ignites every palate at our grill restaurant!",
};

type Params = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export default async function RootLayout({ children, params }: Params) {
  let dictionaries;
  try {
    dictionaries = (await import(`../../dictionaries/${params.lang}.json`))
      .default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={params.lang} messages={dictionaries}>
          <ProgressBar>
            <Header lang={params.lang} />
            {children}
            <Footer />
          </ProgressBar>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
