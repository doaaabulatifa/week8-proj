import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../componants/header/Header"
import Footer from "../componants/footer/Footer";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FactHub",
  description: "Empowering knowledge seekers with a treasure trove of verified facts. Join our community of FactSharers in the pursuit of truth and enlightenment.",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer  />
        
        </body>
        
    </html>
   
    </>
  );
}
