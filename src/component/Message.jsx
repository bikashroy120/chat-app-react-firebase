import React from "react";
import img from "../img/man.webp";
import "../App.css";

const Message = () => {
  return (
    <div className="flex items-start justify-start gap-2 mb-5 flex-row-reverse">
      <img src={img} alt="" className="w-14 h-14 rounded-full" />
      <div className=" w-[350px] ">
        <h5 className=" bg-blue-300 w_component">hfhfhfhfhhfhfhhfhff sd</h5>
        <img src={img} alt="" className="w-full h-auto"/>
      </div>
    </div>
  );
};

export default Message;
