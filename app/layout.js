import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { Providers } from "./Providers";
import LiveScore from "@/components/TestLiveScore";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JeetbuzzNews",
  description: "JeetBuzz - Cricket Insights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script>var Entity_sport = [];</script>
      </head>

      <body className={inter.className}>
        <Providers>
          {/* <ScoreCard /> */}
          <div className="container mx-auto my-4 px-4">
            <LiveScore />
          </div>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <script defer src="https://dashboard.entitysport.com/widget/assets/js/widget.js"></script>
      </body>
    </html>
  );
}
