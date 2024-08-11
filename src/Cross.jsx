import React from 'react';

export default function Cross(props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 512 512"
      style={{ color: '#ffffff' }}
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <rect
        width="512"
        height="512"
        x="0"
        y="0"
        rx="30"
        fill="transparent"
        stroke="#ffffff"
        strokeWidth="0"
        strokeOpacity="100%"
        paintOrder="stroke"
      ></rect>
      <g fill="#ffffff">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"
        />
      </g>
    </svg>
  );
}
