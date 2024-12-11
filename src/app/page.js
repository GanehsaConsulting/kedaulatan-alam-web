import { AboutUs } from "@/components/AboutUs";
import { AnimateOnce } from "@/components/AnimateOnce";
import { Banner } from "@/components/Banner";
import { Contact, } from "@/components/Contact";
import { Products } from "@/components/Products";
import { VM } from "@/components/VM";
import { WhyUs } from "@/components/WhyUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>PT. Kedaulatan Alam Indonesia - Mitra Terbaik untuk Peternakan, Perkebunan, dan Agribisnis</title>
        <meta name="title" content="PT. Kedaulatan Alam Indonesia - Mitra Terbaik untuk Peternakan, Perkebunan, dan Agribisnis" />
        <meta name="description" content="PT. Kedaulatan Alam Indonesia menyediakan produk unggas, hasil perkebunan, jasa pertanian, dan layanan konsultasi manajemen agribisnis berkualitas tinggi dengan jaringan distribusi luas dan prinsip keberlanjutan." />
        <meta name="keywords" content="PT Kedaulatan Alam Indonesia, produk peternakan, produk perkebunan, agribisnis, layanan pertanian, hasil pertanian, pupuk, pestisida, konsultasi bisnis, distribusi nasional" />
        <meta name="author" content="PT. Kedaulatan Alam Indonesia" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kedaulatanalamindonesia.com/" />
        <meta property="og:title" content="PT. Kedaulatan Alam Indonesia - Mitra Terbaik untuk Peternakan, Perkebunan, dan Agribisnis" />
        <meta property="og:description" content="Produk unggas, hasil perkebunan, jasa pertanian, dan layanan konsultasi agribisnis dengan distribusi luas dan prinsip keberlanjutan." />
        <meta property="og:image" content="https://kedaulatanalamindonesia.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kedaulatanalamindonesia.com/" />
        <meta property="twitter:title" content="PT. Kedaulatan Alam Indonesia - Mitra Terbaik untuk Peternakan, Perkebunan, dan Agribisnis" />
        <meta property="twitter:description" content="Produk unggas, hasil perkebunan, jasa pertanian, dan layanan konsultasi agribisnis dengan distribusi luas dan prinsip keberlanjutan." />
        <meta property="twitter:image" content="https://kedaulatanalamindonesia.com/twitter-image.jpg" />

        {/* Viewport & Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Custom Fonts (Optional) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />

        {/* Additional SEO Enhancements */}
        <link rel="canonical" href="https://kedaulatanalamindonesia.com/" />
      </Head>

      <AnimateOnce animation={'animate__backInDown'}>
        <Banner />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <AboutUs />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <VM />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <Products />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <WhyUs />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <Contact />
      </AnimateOnce>

    </>
  );
}