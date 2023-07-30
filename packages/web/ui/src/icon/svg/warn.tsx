import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M8 14.67A6.667 6.667 0 118 1.335 6.667 6.667 0 018 14.67zm0-1.334A5.333 5.333 0 108 2.669a5.333 5.333 0 000 10.667zm0-8.667a.667.667 0 01.667.667v3.333a.667.667 0 01-1.333 0V5.336A.667.667 0 018 4.669zm0 6.667a.667.667 0 110-1.333.667.667 0 010 1.333z"
        fill="#AEAEAE"
      />
    </svg>
  );
}

export default SvgComponent;
