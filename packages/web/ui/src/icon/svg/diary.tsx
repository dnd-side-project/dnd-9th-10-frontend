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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.385 2a1.59 1.59 0 00-1.59 1.59v.795a.795.795 0 100 1.59v1.59a.795.795 0 000 1.589v1.59a.795.795 0 100 1.59v1.59a.795.795 0 100 1.589v.795a1.59 1.59 0 001.59 1.59h9.538a1.59 1.59 0 001.59-1.59V3.59A1.59 1.59 0 0014.923 2H5.385zm1.987 3.18a1.192 1.192 0 00-1.193 1.192v.795a1.192 1.192 0 001.193 1.192h5.564a1.192 1.192 0 001.192-1.192v-.795a1.192 1.192 0 00-1.192-1.193H7.372z"
        fill="#FDFDFD"
      />
    </svg>
  );
}

export default SvgComponent;
