import "./globals.css";

import { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";
import { inter } from "@/lib/fonts";
import { seo } from "@/lib/metadata";

export const metadata: Metadata = seo({
  title: {
    template: "%s — Tooodos",
    default: "Tooodos — Create, Plan, Manage and Analyze your daily tasks.",
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
      <body className={cn("antialiased", inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
