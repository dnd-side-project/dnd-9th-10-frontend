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
        d="M16.3 3.166a.568.568 0 00-.802 0L4 14.666v4.767a.567.567 0 00.567.567h4.767l11.5-11.498a.565.565 0 000-.802L16.3 3.166z"
        fill="#959595"
      />
    </svg>
  );
}

export default SvgComponent;
