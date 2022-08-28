import React from "react";
import ctl from "@netlify/classnames-template-literals";

interface IBadge {
  variant: string;
  text: string;
}

const Badge = ({ variant, text }: IBadge) => {
  const badgeCN = ctl(`
    text-sm
    font-medium
    mr-2
    px-2.5
    py-0.5
    rounded
    
    ${variant === "blue" && "bg-blue-100 text-blue-800"}
    ${variant === "gray" && "bg-gray-100 text-gray-800"}
    ${variant === "red" && "bg-red-100 text-red-800"}
    ${variant === "rose" && "bg-rose-100 text-rose-800"}
    ${variant === "green" && "bg-green-100 text-green-800"}
    ${variant === "yellow" && "bg-yellow-100 text-yellow-800"}
    ${variant === "purple" && "bg-purple-100 text-purple-800"}
    ${variant === "indigo" && "bg-indigo-100 text-indigo-800"}
    ${variant === "lime" && "bg-lime-100 text-lime-800"}
    ${variant === "pink" && "bg-pink-100 text-pink-800"}
  `);

  return <span className={badgeCN}>{text}</span>;
};

export default Badge;
