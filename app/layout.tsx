import "./globals.css";

import { Metadata } from "next";
import { cn } from "@/lib/cn";
import { inter } from "@/lib/fonts";
import { seo } from "@/lib/metadata";

export const metadata: Metadata = seo({
  title: {
    template: "%s — Tooodos",
    default: "Tooodos — Create, Plan, Manage and Analyze your dailt tasks.",
  },
});

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
      <body className={cn("antialiased", inter.className)}>{children}</body>
    </html>
  );
}
