import Link from "next/link";
import React from "react";
import { ThemeBtn } from "../ui/theme-btn";
import { UserMenu } from "./user-menu";
import { cn } from "@/lib/cn";
import { focusRing } from "../ui/focuses";

export const Header: React.FC = () => {
  return (
    <header className="w-full sticky top-0 inset-x-0">
      <nav className="flex flex-row items-center justify-between px-6 max-w-full mx-auto my-5">
        <Link
          href={"/week"}
          className={cn("p-0.5 rounded", focusRing)}
        >
          <div
            className="w-[24px] h-[24px] bg-primary rounded-full"
            aria-hidden="true"
          ></div>
        </Link>

        <div className="hidden md:flex md:flex-row md:items-center md:gap-2">
          <ThemeBtn />
          <UserMenu />
        </div>
      </nav>
    </header>
  );
};
