import React from "react";

interface StarBorderProps {
  className?: string;
}

const StarBorder: React.FC<StarBorderProps> = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L14.09 8.26L20.97 8.27L15.45 12.14L17.54 18.4L12 14.53L6.46 18.4L8.55 12.14L3.03 8.27L9.91 8.26L12 2Z"
      stroke="#8900C3"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export default StarBorder; 