import type { Metadata } from "next";
import { Inter, Nunito_Sans, Prata } from "next/font/google";
import "../globals.css";
import Carousel from "@/components/carousel/Carousel";
import TopBar from "@/components/shared/TopBar";
import NavBar from "@/components/shared/NavBar";
import Login from "@/components/auth/login/Login";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teresa Barberena",
  description: "Patisserie",
};

const prata = Prata({
  subsets: ['latin'],
  weight: '400',
  variable: "--font-prata",
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: "--font-nunitoSans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <header className={`${nunitoSans.variable} ${prata.variable} `}>
          <TopBar />
          <Login />
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
