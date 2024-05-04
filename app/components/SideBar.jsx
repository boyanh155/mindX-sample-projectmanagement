import Link from "next/link";
import React from "react";

const contents = [
  {
    path: "/home/content",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M19 9.77806V16.2C19 17.8801 19 18.7202 18.673 19.3619C18.3854 19.9264 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9264 5.32698 19.3619C5 18.7202 5 17.8801 5 16.2V9.7774M21 12L15.5668 5.96393C14.3311 4.59116 13.7133 3.90478 12.9856 3.65138C12.3466 3.42882 11.651 3.42887 11.0119 3.65153C10.2843 3.90503 9.66661 4.59151 8.43114 5.96446L3 12M14 12C14 13.1045 13.1046 14 12 14C10.8954 14 10 13.1045 10 12C10 10.8954 10.8954 9.99996 12 9.99996C13.1046 9.99996 14 10.8954 14 12Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    ),
  },
  {
    path: "/home/dashboard",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M6 13C6.55 13 7 12.55 7 12C7 11.45 6.55 11 6 11C5.45 11 5 11.45 5 12C5 12.55 5.45 13 6 13Z"
            stroke="#000000"
            stroke-width="2"
          ></path>{" "}
          <path
            d="M6 7C6.55 7 7 6.55 7 6C7 5.45 6.55 5 6 5C5.45 5 5 5.45 5 6C5 6.55 5.45 7 6 7Z"
            stroke="#000000"
            stroke-width="2"
          ></path>{" "}
          <path
            d="M6 19C6.55 19 7 18.55 7 18C7 17.45 6.55 17 6 17C5.45 17 5 17.45 5 18C5 18.55 5.45 19 6 19Z"
            stroke="#000000"
            stroke-width="2"
          ></path>{" "}
          <path
            d="M12 13C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12C11 12.55 11.45 13 12 13Z"
            stroke="#000000"
            stroke-width="2"
          ></path>{" "}
          <path
            d="M12 7C12.55 7 13 6.55 13 6C13 5.45 12.55 5 12 5C11.45 5 11 5.45 11 6C11 6.55 11.45 7 12 7Z"
            stroke="#000000"
            stroke-width="2"
          ></path>{" "}
          <path
            d="M12 19C12.55 19 13 18.55 13 18C13 17.45 12.55 17 12 17C11.45 17 11 17.45 11 18C11 18.55 11.45 19 12 19Z"
            stroke="#000000"
            stroke-width="2"
          ></path>{" "}
          <path
            d="M18 13C18.55 13 19 12.55 19 12C19 11.45 18.55 11 18 11C17.45 11 17 11.45 17 12C17 12.55 17.45 13 18 13Z"
            stroke="#000000"
            stroke-width="2"
          ></path>{" "}
          <path
            d="M18 7C18.55 7 19 6.55 19 6C19 5.45 18.55 5 18 5C17.45 5 17 5.45 17 6C17 6.55 17.45 7 18 7Z"
            stroke="#000000"
            stroke-width="2"
          ></path>{" "}
          <path
            d="M18 19C18.55 19 19 18.55 19 18C19 17.45 18.55 17 18 17C17.45 17 17 17.45 17 18C17 18.55 17.45 19 18 19Z"
            stroke="#000000"
            stroke-width="2"
          ></path>{" "}
        </g>
      </svg>
    ),
  },
];
const SideBar = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        {/* LOGO */}
        <div className="w-16 h-16 rounded-full bg-red-400 flex justify-center items-center">
          LOGO
        </div>
        {/* Content */}
        <div className="flex flex-col gap-4 w-full items-center ">
          {contents.map((v, id) => (
            <Link
              href={v.path}
              className="w-8 h-8 cursor-pointer hover:opacity-60 transition-all"
              key={id}
            >
              {v.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* User info */}
      <div className="flex flex-col ">
        <div className="w-16 h-16 rounded-full bg-red-400 flex justify-center items-center">
          Close
        </div>
      </div>
    </div>
  );
};

export default SideBar;
