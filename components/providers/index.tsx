import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};
