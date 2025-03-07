import { SVGProps } from "react";

type Icon = SVGProps<SVGSVGElement>;

export const Icons = {
  RiArrowRightIcon: (props: Icon) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16 12L10 18V6L16 12Z"></path>
    </svg>
  ),
};
