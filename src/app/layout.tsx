import "@/styles/globals.css";

import { Geist, Geist_Mono, Inter } from "next/font/google";

import type { Metadata } from "next";
import { Provider } from "@/components/providers/provider";
import { cn } from "@/lib/cn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tooodos",
  description: "Create, plan and manage simple todo tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          "relative antialiased flex flex-col justify-between min-h-screen",
          inter.variable,
          geistMono.variable,
          geistSans.variable,
        )}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
