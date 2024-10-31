import Confetti from "@/components/ui/Confetti";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Sacramento } from "next/font/google";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "William & Mia Schaefermeyer Wedding RSVP",
  description: "William & Mia Schaefermeyer Wedding RSVP",
  robots: "noindex,nofollow",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

const tangerine = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tangerine",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${tangerine.variable}`}>
      <body>
        {children}
        <Toaster />
        <Confetti />
      </body>
    </html>
  );
}
