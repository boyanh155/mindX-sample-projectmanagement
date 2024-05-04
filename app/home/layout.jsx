"use client";

import React, { useEffect } from "react";
import SideBar from "../components/SideBar";
import GeneralList from "../components/GeneralList";

const HomeLayout = ({ children }) => {
  const [isClose, setIsClose] = React.useState(false);
  useEffect(()=>{

  })
  return (
    <div className="flex flex-row p-5 h-screen relative">
      <div
        className={`flex relative flex-row transition-all duration-300 ${
          isClose ? "w-0 -left-[40%] opacity-0" : "w-1/3 opacity-100"
        }`}
      >
        {/* SIDEBAR */}
        <SideBar />
        {/* GENERAL LIST */}
        <GeneralList />
      </div>
      {/* MAIN */}
      <div
        className={`flex-grow 
      `}
      >
        {children}
      </div>

      <div
        onClick={() => setIsClose(!isClose)}
        className="fixed bottom-5 right-5 w-16 h-16 rounded-full bg-red-400 flex justify-center items-center"
      >
        X
      </div>
    </div>
  );
};

export default HomeLayout;
