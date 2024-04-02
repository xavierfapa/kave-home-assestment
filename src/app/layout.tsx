import "./reset.css";
import "./globals.css";
import type { Metadata } from "next";
import { noto_serif, poppins } from "./fonts";
import Header from "@/layout/header/Header";
import Providers from "@/context/providers";

export const metadata: Metadata = {
  title: "KaveHome web page",
  description: "KaveHome assestment description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${noto_serif.variable} ${poppins.variable}`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
