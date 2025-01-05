import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

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
        <body className={`${roboto.className} antialiased`}>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
