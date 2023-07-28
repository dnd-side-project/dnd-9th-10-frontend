import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <rect x={4} y={4} width={16} height={16} rx={3} fill="#959595" />
      <path
        d="M8 11.539L10.743 15l2.628-2.5L16 10"
        stroke="#EEF0F1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
