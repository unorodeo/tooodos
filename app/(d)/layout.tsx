import { Header } from "@/components/core/header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="flex-1 relative w-full">{children}</main>
    </>
  );
}
