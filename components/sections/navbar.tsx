import Link from "next/link";
import React from "react";
import { ThemeBtn } from "../ui/theme-btn";
import { cn } from "@/lib/cn";
import { focusRing } from "../ui/focuses";

export const Navbar: React.FC = () => {
  return (
    <header className="w-full sticky top-0 inset-x-0">
      <nav className="flex flex-row items-center justify-between my-6 max-w-7xl mx-auto bg-background">
        <Link
          href={"/"}
          className={cn(
            focusRing,
            "text-3xl font-bold tracking-tight px-0.5 rounded"
          )}
        >
          Tooodos
        </Link>
        <div className="hidden md:flex md:flex-row md:items-center md:gap-2">
          <ThemeBtn />
        </div>
      </nav>
    </header>
  );
};
