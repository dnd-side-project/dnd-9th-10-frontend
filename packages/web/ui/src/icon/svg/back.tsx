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
        d="M15.259 2.819a1 1 0 011.482 0l1.392 1.536a1 1 0 001.121.254l1.945-.799a1 1 0 011.34.648l.56 1.935a1 1 0 00.912.721l2.078.102a1 1 0 01.936 1.176l-.35 1.939a1 1 0 00.514 1.06l1.787.95a1 1 0 01.336 1.477l-1.171 1.589a1 1 0 000 1.186l1.171 1.59a1 1 0 01-.336 1.476l-1.787.95a1 1 0 00-.515 1.06l.35 1.939a1 1 0 01-.935 1.176l-2.078.102a1 1 0 00-.912.721l-.56 1.935a1 1 0 01-1.34.648l-1.945-.8a1 1 0 00-1.121.255L16.74 29.18a1 1 0 01-1.482 0l-1.392-1.536a1 1 0 00-1.121-.254l-1.945.799a1 1 0 01-1.34-.648l-.56-1.935a1 1 0 00-.912-.721l-2.078-.102a1 1 0 01-.936-1.176l.35-1.939a1 1 0 00-.514-1.06l-1.787-.95a1 1 0 01-.336-1.477l1.171-1.589a1 1 0 000-1.186l-1.171-1.59a1 1 0 01.336-1.476l1.787-.95a1 1 0 00.515-1.06l-.35-1.939a1 1 0 01.935-1.176l2.078-.102a1 1 0 00.912-.721l.56-1.935a1 1 0 011.34-.648l1.945.8a1 1 0 001.121-.255L15.26 2.82z"
        fill="#5E6E96"
      />
    </svg>
  );
}

export default SvgComponent;
