import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import { roboto, caveatBrush } from "./fonts";
import NotificationToken from "@/components/NotificationToken";
import ScrollUp from "@/components/Common/ScrollUp";

export const metadata: Metadata = {
  title: "3º Corso nazionale uomini 2026",
  description:
    "3º Corso nazionale uomini Salerno 27-29 Marzo 2026",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en" className="bg-defaultBg">
        <head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body className={`${roboto.variable} ${caveatBrush.variable} min-h-screen bg-defaultBg antialiased`}>
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
