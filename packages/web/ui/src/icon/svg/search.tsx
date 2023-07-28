import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <circle
        cx={8.73166}
        cy={8.73166}
        r={5.73166}
        stroke="#2F2F2F"
        strokeWidth={2}
      />
      <rect
        x={10.9756}
        y={13.3555}
        width={2.73866}
        height={6.44662}
        rx={1.36933}
        transform="rotate(-45 10.976 13.355)"
        fill="#2F2F2F"
      />
    </svg>
  );
}

export default SvgComponent;
