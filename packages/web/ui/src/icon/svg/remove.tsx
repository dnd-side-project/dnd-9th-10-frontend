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
      <path
        d="M20.1 6.601h-4.5V5.098a2.178 2.178 0 00-2.25-2.097h-2.7A2.178 2.178 0 008.4 5.098v1.503H3.9a.9.9 0 000 1.8h.9v9.9a2.7 2.7 0 002.7 2.7h9a2.7 2.7 0 002.7-2.7v-9.9h.9a.9.9 0 000-1.8zm-9.9-1.503c0-.144.189-.297.45-.297h2.7c.261 0 .45.153.45.297v1.503h-3.6V5.098z"
        fill="#959595"
      />
    </svg>
  );
}

export default SvgComponent;
