import { Figtree } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Head from "next/head";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "Kalanesia",
  description: "Membangun Masa Depan Pertanian Yang Lebih Baik!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="icon.png" />
      </Head>
      <body
        className={`${figtree.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
