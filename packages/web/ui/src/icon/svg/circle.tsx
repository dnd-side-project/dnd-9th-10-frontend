import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={62}
      height={62}
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={31} cy={31} r={28} stroke="#686868" strokeWidth={6} />
    </svg>
  );
}

export default SvgComponent;
