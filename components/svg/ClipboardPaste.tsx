import React from "react";

type Props = { height?: number; width?: number; color?: string };

const ClipboardPaste = ({ height = 20, width = 20, color = "currentColor" }: Props) => {
  return (
    <svg
      viewBox="0 0 36 36"
      width={width}
      height={height}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.6,4H21.55a3.89,3.89,0,0,0-7.31,0H13.4A2.41,2.41,0,0,0,11,6.4V10H25V6.4A2.41,2.41,0,0,0,22.6,4ZM23,8H13V6.25A.25.25,0,0,1,13.25,6h2.69l.12-1.11A1.24,1.24,0,0,1,16.61,4a2,2,0,0,1,3.15,1.18l.09.84h2.9a.25.25,0,0,1,.25.25Z" />
      <path
        d="M 34.998 18.06 L 23.078 18.06 L 25.918 15.23 C 26.465 14.683 26.214 13.75 25.468 13.55 C 25.121 13.457 24.752 13.556 24.498 13.81 L 19.248 19.06 L 24.498 24.31 C 24.687 24.497 24.942 24.602 25.208 24.6 C 25.978 24.597 26.455 23.762 26.068 23.096 C 26.026 23.025 25.976 22.959 25.918 22.9 L 23.078 20.06 L 34.998 20.06 C 35.768 20.06 36.249 19.227 35.864 18.56 C 35.685 18.251 35.355 18.06 34.998 18.06 Z"
        transform="matrix(-1, 0, 0, -1, 55.24754, 38.1157)"
      />
      <path d="M 29 11.63 L 31 11.63 L 31 6.012 C 31.011 5.457 30.271 5.003 29.35 5 L 27.08 5 L 27.08 6.205 L 29 6.205 L 29 11.63 Z" />
      <path d="M 29 31 L 7 31 L 7 7 L 9 7 L 9 5 L 6.64 5 C 5.727 5.011 4.994 5.757 5 6.67 L 5 31.32 C 4.989 32.241 5.729 32.995 6.65 33 L 29.36 33 C 30.273 32.989 31.006 32.243 31 31.33 L 31 26.131 L 28.978 26.127 L 29 31 Z" />
    </svg>
  );
};

export default ClipboardPaste;