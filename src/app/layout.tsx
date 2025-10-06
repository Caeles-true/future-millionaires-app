import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  // return (
  //   <>
  //     <Navbar />
  //     <main>{children}</main>
  //     <Footer />
  //   </>
  // );
  return (
    <html lang="en">
      <body className="antialiased bg-body text-body font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
