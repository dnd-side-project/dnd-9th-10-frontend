import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.772 4.669A2.697 2.697 0 0016 4c-.649 0-1.276.237-1.772.669l-8.25 7.194c-.306.267-.553.6-.721.974A2.922 2.922 0 005 14.035V25.79C5 27.01 5.958 28 7.139 28h3.667c.567 0 1.11-.233 1.512-.648.401-.414.626-.976.626-1.563v-5.056c0-.86.663-1.556 1.488-1.58h3.136c.398.012.777.183 1.054.478.278.295.434.69.434 1.102v5.056c0 1.22.958 2.211 2.138 2.211h3.667c.567 0 1.111-.233 1.512-.648.402-.414.627-.976.627-1.563V14.034c0-.414-.088-.823-.256-1.198a2.834 2.834 0 00-.722-.975l-8.25-7.192z"
        fill="#AEAEAE"
      />
    </svg>
  );
}

export default SvgComponent;
