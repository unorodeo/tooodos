import React, { ReactNode } from "react";

import { ThemeProvider } from "@/components/providers/theme";

interface Props {
  children: ReactNode;
}

export function Provider({ children }: Props) {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="system"
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
