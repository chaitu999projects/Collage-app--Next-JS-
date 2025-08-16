import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";

export const metadata = {
  title: "Chaitu Collage",
  icons: {
    icon: "/my_dp.jpg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
