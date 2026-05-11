import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PRG Associates | Chartered Accountants",
  description: "Professional CA services - GST, ITR, Company Registration, Food License, FSSAI, Trademark and more.",
  keywords: "CA firm, GST registration, ITR filing, company registration, food license, chartered accountant",
  icons: {
    icon: "/PRG-LOGO.png",
    shortcut: "/PRG-LOGO.png",
    apple: "/PRG-LOGO.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
