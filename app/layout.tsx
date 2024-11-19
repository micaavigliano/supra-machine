import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import { Open_Sans } from "next/font/google";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Supra Machine",
  description: "Empresa de ingeniería y montaje",
};

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
