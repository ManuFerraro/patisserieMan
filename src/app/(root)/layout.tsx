import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Carousel from "@/components/carousel/Carousel";
import TopBar from "@/components/shared/TopBar";
import NavBar from "@/components/shared/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teresa Barberena",
  description: "Patisserie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <header>
          <TopBar />
        </header>
        <nav className="w-full h-[90vh] sm:h-[95vh] relative ">
         
         <Carousel />

           
            
          <div className="absolute top-0  z-50 w-full h-[40%]">
          <NavBar />
          </div>
            
        
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
