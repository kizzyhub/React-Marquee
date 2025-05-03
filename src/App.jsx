import React from "react";
import "./App.css";
import Marquee from "react-fast-marquee";

const App = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center
    bg-[#181818] text-neutral-200"
    >
      <div className="w-[50%] flex flex-col">
        <div className="flex space-y-2 flex-col text-center mb-14">
          <span className="text-5xl font-bold">My Skills</span>
          <span className="text-2xl">
            These are the skills I have acquired over the years.
          </span>
        </div>
        <Marquee pauseOnHover>
          <div
            className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4
          font-bold text-2xl cursor-pointer text-orange-400"
          >
            HTML
          </div>
          <div
            className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4
          font-bold text-2xl cursor-pointer text-purple-800"
          >
            Css
          </div>
          <div
            className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4
          font-bold text-2xl cursor-pointer text-teal-500"
          >
            JavaScript
          </div>
          <div
            className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4
          font-bold text-2xl cursor-pointer text-blue-400"
          >
            React
          </div>
          <div
            className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4
          font-bold text-2xl cursor-pointer text-pink-700"
          >
            Vite
          </div>
          <div
            className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4
          font-bold text-2xl cursor-pointer text-neutral-400"
          >
            Tailwindcss
          </div>
        </Marquee>
        <Marquee autoFill pauseOnHover direction="right"> 
        <div
            className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4
          font-bold text-2xl cursor-pointer text-green-400"
          >
            Nodejs
          </div>
          <div
            className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4
          font-bold text-2xl cursor-pointer text-blue-500"
          >
            Github
          </div>
          <div
            className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4
          font-bold text-2xl cursor-pointer text-red-600"
          >
            R programming 
          </div>
          <div
            className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4
          font-bold text-2xl cursor-pointer text-yellow-600"
          >
            Python
          </div>

        </Marquee>
      </div>
    </div>
  );
};

export default App;
