import React from "react";
import img from "../img/addAvatar.png"

const Regester = () => {
  return (
    <div className="w-full h-screen bg-orange-300 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col bg-white w-[300px] p-4 py-6 rounded-md shadow-md">
        <span className="text-[20px]">Bikash Chat</span>
        <span className=" text-[14px] text-gray-400">Regester</span>
        <form className="flex items-center justify-center flex-col mt-4">
          <input
            className=" outline-none border-b border-blue-200 mb-2 text-[16px] font-normal p-1"
            type="text"
            placeholder="User Name"
          />
          <input
            className=" outline-none border-b border-blue-200 mb-2 text-[16px] font-normal p-1"
            type="email"
            placeholder="Enter Email"
          />
          <input
            className=" outline-none border-b border-blue-200 mb-2 text-[16px] font-normal p-1"
            type="text"
            placeholder="password"
          />
          <input type="file" id="for" style={{display:"none"}}/>
          <label htmlFor="for" className="flex items-center justify-start">
            <img src={img} alt="" />
            <h5>Add img</h5>
          </label>
          <button
            type="submit"
            className="w-full bg-orange-400 py-1 text-white mb-3"
          >
            Sing up
          </button>
        </form>

        <span className="text-[14px] text-gray-400 flex items-center justify-center gap-1">
          You do have a acount? <p className=" text-red-300 cursor-pointer">login</p>
        </span>
      </div>
    </div>
  );
};

export default Regester;
