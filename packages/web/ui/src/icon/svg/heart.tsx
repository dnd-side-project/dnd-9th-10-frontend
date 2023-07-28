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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.663 6.676a5.642 5.642 0 013.561-1.659 5.645 5.645 0 013.78 1.078 5.713 5.713 0 013.995-1.05 5.635 5.635 0 013.637 1.965 5.794 5.794 0 011.36 3.93 5.781 5.781 0 01-1.643 3.823l-5.347 5.398a2.834 2.834 0 01-2.003.839A2.835 2.835 0 0110 20.16l-5.337-5.397A5.737 5.737 0 013 10.72a5.72 5.72 0 011.663-4.044z"
        fill="#DF6A61"
      />
    </svg>
  );
}

export default SvgComponent;
