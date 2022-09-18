import img from '../img/man.webp'
import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contex/AuthContext";
import { ChatContext } from "../contex/ChatContext";
import { db } from "../firbase";

const Chats = () => {


    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u });
      };

    useEffect(() => {
        const getChats = () => {
          const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
            setChats(doc.data());
          });
    
          return () => {
            unsub();
          };
        };
    
        currentUser.uid && getChats();
      }, [currentUser.uid]);

  return (
    <div className='mt-3'>
        {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) =>{
            return(
            <div className='px-2 flex items-center justify-start gap-2 mb-3 hover:bg-[#2E2D52] p-2 cursor-pointer'>
            <img src={img} alt="" className='w-12 h-12 rounded-full'/>
            <div>
                <h3 className=' text-white'>jone dow</h3>
                <p className=' text-gray-400 text-[14px] font-normal'>Lorem ipsum dolor sit</p>
            </div>
        </div>
            )
        } )}
    </div>
  )
}

export default Chats