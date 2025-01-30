"use client";

import { MonitorIcon, MoonStarIcon, SunIcon, SunMoonIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import { useTheme } from "next-themes";

export const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Select
      defaultValue="system"
      onValueChange={(value) => setTheme(value)}
    >
      <SelectTrigger className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80 w-32">
        <SelectValue placeholder="Select theme" className="text-sm font-medium"/>
      </SelectTrigger>
      <SelectContent className="[&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2">
        <SelectItem value="system">
          <MonitorIcon
            size={16}
            aria-hidden="true"
          />
          <span className="truncate">Auto</span>
        </SelectItem>
        <SelectItem value="light">
          <SunIcon
            size={16}
            aria-hidden="true"
          />
          <span className="truncate">Light</span>
        </SelectItem>
        <SelectItem value="dark">
          <MoonStarIcon
            size={16}
            aria-hidden="true"
          />
          <span className="truncate">Dark</span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
