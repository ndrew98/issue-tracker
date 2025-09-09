import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import { Theme, ThemePanel } from "@radix-ui/themes";
import NavBar from "./NavBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "A simple issue tracker built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Theme appearance="light" accentColor="iris">
          <NavBar />
          <main className=" p-5">{children}</main>
          <ThemePanel />
        </Theme>
      </body>
    </html>
  );
}
