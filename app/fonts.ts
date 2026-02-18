import { Roboto, Caveat_Brush } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const caveatBrush = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat-brush",
});
