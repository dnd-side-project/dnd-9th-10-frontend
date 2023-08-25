import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={150}
      height={40}
      viewBox="0 0 150 40"
      fill="none"
      {...props}
    >
      <path
        d="M12.13 11.429a1 1 0 00-1 1v3.714a1 1 0 001 1h7.35c1.854 0 2.782-.953 2.782-2.857 0-1.905-.928-2.857-2.783-2.857h-7.348zm0 14.285a1 1 0 00-1 1v3.715a1 1 0 001 1h7.35c1.854 0 2.782-.953 2.782-2.858 0-1.904-.928-2.857-2.783-2.857h-7.348zM1 40a1 1 0 01-1-1V1a1 1 0 011-1h18.48c9.275 0 13.913 4.762 13.913 14.286 0 2.582-.802 4.664-2.407 6.245a1.283 1.283 0 000 1.795c1.605 1.581 2.407 3.663 2.407 6.245 0 7.62-4.638 11.429-13.914 11.429H1zM49.542 11.429a1 1 0 00-1 1v3.714a1 1 0 001 1h7.349c1.855 0 2.782-.953 2.782-2.857 0-1.905-.927-2.857-2.782-2.857h-7.349zm0 14.285a1 1 0 00-1 1v3.715a1 1 0 001 1h7.349c1.855 0 2.782-.953 2.782-2.858 0-1.904-.927-2.857-2.782-2.857h-7.349zM38.412 40a1 1 0 01-1-1V1a1 1 0 011-1H56.89c9.275 0 13.913 4.762 13.913 14.286 0 2.582-.802 4.664-2.406 6.245a1.283 1.283 0 000 1.795c1.604 1.581 2.406 3.663 2.406 6.245 0 7.62-4.638 11.429-13.913 11.429H38.41zM92.8 40c-5.38 0-9.972-1.952-13.775-5.857-3.803-3.905-5.705-8.62-5.705-14.143 0-5.524 1.902-10.238 5.705-14.143C82.828 1.952 87.419 0 92.799 0c5.38 0 9.972 1.952 13.775 5.857 3.803 3.905 5.704 8.62 5.704 14.143 0 5.524-1.901 10.238-5.704 14.143C102.771 38.048 98.179 40 92.799 40zm0-11.429c2.3 0 4.266-.838 5.898-2.514 1.633-1.676 2.449-3.695 2.449-6.057 0-2.362-.816-4.381-2.449-6.057-1.632-1.676-3.598-2.514-5.899-2.514-2.3 0-4.267.838-5.9 2.514-1.632 1.676-2.448 3.695-2.448 6.057 0 2.362.816 4.381 2.449 6.057 1.632 1.676 3.599 2.514 5.9 2.514zM128.256 25.027c-.595-.728-1.774-.307-1.774.633V39a1 1 0 01-1 1h-9.131a1 1 0 01-1-1V1a1 1 0 011-1h9.131a1 1 0 011 1v13.079c0 .967 1.236 1.37 1.807.59L138.317.938A1 1 0 01139.83.82l8.347 8.293a1 1 0 01-.107 1.51l-11.549 8.616a1 1 0 00-.039 1.572l.601.497 11.915 7.556a1 1 0 01.206 1.516l-7.924 8.758a1 1 0 01-1.516-.038l-11.508-14.073z"
        fill="#2F2F2F"
      />
    </svg>
  );
}

export default SvgComponent;