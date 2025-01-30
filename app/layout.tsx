import "./globals.css";

import { cn } from "@/lib/cn";
import { inter } from "@/lib/fonts";

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
