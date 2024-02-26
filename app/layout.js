import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/Footer";
import ScoreCard from '@/components/ScoreCard';
import { Providers } from "./Providers";

// import Navi from "@/components/Navi";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JeetbuzzNews",
  description: "JeetBuzz - Cricket Insights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
    {/* <head>
    <script> var Entity_sport = []; </script>
    </head> */}

      <body className={inter.className}>
        <Providers>     
          <ScoreCard />
          <Navbar />
          {/* <Navi /> */}
          {children}
          <Footer />
        </Providers>
        {/* <script defer src="https://dashboard.entitysport.com/widget/assets/js/widget.js"></script> */}
      </body>
    </html>
  );
}
