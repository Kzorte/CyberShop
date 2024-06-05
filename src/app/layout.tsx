import { Poppins } from "next/font/google";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/shared/Footer/Footer";
import SiteHeader from "@/app/SiteHeader";
import CommonClient from "./CommonClient";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
  params,
  hideHeader,
  hideFooter, // Tambahkan properti hideHeader
}: {
  children: React.ReactNode;
  params: any;
  hideHeader?: boolean;
  hideFooter?: boolean;
}) {
  return (
    <html lang="en" dir="" className={poppins.className}>
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        {/* Tampilkan header hanya jika hideHeader tidak ditetapkan */}
        {!hideHeader && <SiteHeader />}
        {children}
        <CommonClient />
        {!hideFooter && <Footer />}
      </body>
    </html>
  );
}
