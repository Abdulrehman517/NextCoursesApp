import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Version 13",
  description: "Full Stack",
  keywords: "next-version, next-version, extension",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
