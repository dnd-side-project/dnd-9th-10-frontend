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
        d="M19.627 7.01a5.63 5.63 0 00-3.635-1.964 5.579 5.579 0 00-1.738.086l-3.56 4.005 4.448 2.222a.957.957 0 01.5.658c.057.286-.019.582-.198.81l-3.116 3.748a.93.93 0 01-1.331.115.96.96 0 01-.113-1.345l2.341-2.813-4.485-2.24a.958.958 0 01-.283-1.498l2.804-3.147a5.586 5.586 0 00-3.03-.63 5.639 5.639 0 00-3.57 1.66A5.738 5.738 0 003 10.72c0 1.516.595 2.975 1.662 4.043l5.344 5.398c.528.534 1.255.839 2.001.839s1.473-.305 2.002-.84l5.344-5.396a5.783 5.783 0 001.643-3.824 5.718 5.718 0 00-1.36-3.93h-.01z"
        fill="#DF6A61"
      />
    </svg>
  );
}

export default SvgComponent;
