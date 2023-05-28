import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StudyBuddy",
  description:
    "Welcome to StudyHub, virtual study platform designed to enhance your academic journey. Connect with fellow students through immersive video calls, collaborate seamlessly on projects, and unlock your full potential with our suite of productivity features.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="svg" href="/logo-color.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
