import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import {AuthContext} from '../contex/AuthContext'
import { db } from "../firbase";

const Search = () => {

  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const handleSearch = async () => {
    const q = query(
      collection(db, "user"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };


  const HandalKy = (e)=>{
    e.code === "Enter" && handleSearch();
  }

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChat", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChat", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("")
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Find a user...."
        onClick={(e)=>setUsername(e.target.value)}
        onKeyDown={HandalKy}
        className="w-full outline-none border-none p-2 placeholder:text-[15px] text-[15px] bg-transparent"
      />
      {user && 
        <div className="px-2 flex items-center justify-start gap-2 mb-2" onClick={handleSelect}>
        <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full" />
        <h3 className=" text-white">{user.displayName} </h3>
        {
          err && <h2>User Not found</h2>
        }
      </div>
      }
      <hr />
    </div>
  );
};

export default Search;
