import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={212}
      height={55}
      viewBox="0 0 212 55"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.477 0 0 4.477 0 10v26c0 5.523 4.477 10 10 10h91.02l4.98 9 4.98-9H202c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10H10z"
        fill="#299A9A"
      />
    </svg>
  );
}

export default SvgComponent;
