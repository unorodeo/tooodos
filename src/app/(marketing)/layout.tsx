import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MarketingLayout({ children }: Props) {
  return (
    <>
      <main className="flex-1 w-full">{children}</main>
    </>
  );
}
