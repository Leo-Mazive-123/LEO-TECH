import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Leo-Tech | IT Support & Technology Solutions",
  description:
    "Reliable IT support and technology solutions for individuals and businesses. Dream. Build. Inspire.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}