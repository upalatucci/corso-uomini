import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import { permanentMarker, roboto } from "./fonts";

export const metadata: Metadata = {
  title: "Corso Uomini 2025",
  description:
    "Vinciamo in questo “Anno in cui volare ancora più in alto per una Soka Gakkai giovane in tutto il mondo”",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body
          className={`${permanentMarker.variable} ${roboto.variable} antialiased`}
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
