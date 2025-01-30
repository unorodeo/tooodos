import React, { ReactNode } from "react";

import { ThemeProvider } from "./themes";

interface Props {
  children?: ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
};
