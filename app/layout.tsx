import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import { permanentMarker, roboto } from "./fonts";
import NotificationToken from "@/components/NotificationToken";
import ScrollUp from "@/components/Common/ScrollUp";

export const metadata: Metadata = {
  title: "Corso Uomini 2025",
  description:
    "2° Corso Uomini Nazionale: voliamo ancora più in alto per una Soka Gakkai giovane in tutto il mondo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <head>
          <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body
          className={`${permanentMarker.variable} ${roboto.variable} antialiased`}
        >
          <NotificationToken />
          <ScrollUp />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
