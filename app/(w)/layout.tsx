import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative w-full">{children}</main>
      <Footer />
    </>
  );
}
