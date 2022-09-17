import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useNavigate,Link } from "react-router-dom";
import {auth} from '../firbase'


const Login = () => {

    const navigate = useNavigate();
  const HandelSubmit = async (e)=>{
      e.preventDefault()
      const email = e.target[0].value;
      const password = e.target[1].value;
    try{
       await signInWithEmailAndPassword(auth, email, password)
       navigate('/')
    }catch(err){
        console.log(err)
    }
  }

  return (
    <div className="w-full h-screen bg-orange-300 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col bg-white w-[300px] p-4 py-6 rounded-md shadow-md">
        <span className="text-[20px]">Lama Chat</span>
        <span className=" text-[14px] text-gray-400">Login</span>
        <form onSubmit={HandelSubmit} className="flex items-center justify-center flex-col mt-4">
         
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
          <button
            type="submit"
            className="w-full bg-orange-400 py-1 text-white mb-3"
          >
            Sing up
          </button>
        </form>

        <span className="text-[14px] text-gray-400 flex items-center justify-center gap-1">
          You do have a acount? <Link to="/regester" className=" text-red-300 cursor-pointer">Regeater</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
