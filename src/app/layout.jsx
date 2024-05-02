import { Mitr } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const mitr = Mitr({
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700"],
  variable: "--font-mitr",
});

export const metadata = {
  title: "Anime SocialHub",
  description: "Website Anime SocialHub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mitr.className}>{children}</body>
    </html>
  );
}
