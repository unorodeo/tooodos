import { BoltIcon, LogOutIcon, Settings2Icon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Avatar from "boring-avatars";
import { Button } from "../ui/button";
import Link from "next/link";
import React from "react";

const EMAIL_ADDRESS = "enoabasidream@gmail.com";

export const UserMenu: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="rounded-full py-0 ps-0 gap-0"
        >
          <div className="flex items-center justify-center aspect-square h-full pl-1.5">
            <Avatar
              name={EMAIL_ADDRESS}
              className="h-auto w-full rounded-full"
              size={24}
              variant="beam"
              aria-hidden="true"
            />
          </div>
          {EMAIL_ADDRESS}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56"
        align="end"
      >
        <DropdownMenuItem asChild>
          <Link href={"/settings/account"}>
            <BoltIcon
              size={16}
              strokeWidth={2}
              className="opacity-60"
              aria-hidden="true"
            />
            Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Settings2Icon
            size={16}
            strokeWidth={2}
            className="opacity-60"
            aria-hidden="true"
          />
          Preferences
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon
            size={16}
            strokeWidth={2}
            className="opacity-60"
            aria-hidden="true"
          />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
