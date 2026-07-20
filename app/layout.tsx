


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import "./components/styles/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Women In Workforce",
  description: "Women empowerment job portal",
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  return (

    
    <html lang="en">
 <head>
        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        {/* Bootstrap JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >



       
         <Header/>
       <main> {children}</main>
        <Footer/>
      </body>
    </html>
  );
}
