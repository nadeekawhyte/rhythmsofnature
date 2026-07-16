import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Cormorant_Upright } from "next/font/google";
import { Cormorant_Infant } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Bodoni_Moda } from "next/font/google";

import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  variable: "--font-cormorant", // Creates a CSS variable we can use
});

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["300"],
  style: ["italic"],
  variable: "--font-infant",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-playfair",
});

const heroFont = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-hero",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-bodoni",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Live in Rhythm",
  description: "Ayurvedic consultations for balance and wellbeing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`
      ${playfairDisplay.variable}
      ${cormorantGaramond.variable}
      ${cormorantInfant.variable}
      ${montserrat.variable}
      ${heroFont.variable}
      ${bodoni.variable}
      ${fraunces.variable}
      ${inter.variable}
      `}>
      {/* <body className={`${cormorantGaramond.variable} ${montserrat.variable}`}> */}
      <body className="antialiased bg-[#f4eae1]">
        {children}
      </body>
    </html>
  );
}