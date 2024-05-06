import { Mitr } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// components
import Drawer from "./components/Drawer";

const mitr = Mitr({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-mitr",
});

export const metadata = {
  title: "Anime SocialHub",
  description: "Website Anime SocialHub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={`${mitr.className}`}>
        <Drawer>
         {children}
        </Drawer>
      </body>
    </html>
  );
}
