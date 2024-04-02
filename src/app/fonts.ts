import { Noto_Sans, Poppins } from "next/font/google";

export const noto_sans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
