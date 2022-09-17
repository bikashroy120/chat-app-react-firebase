import React from "react";
import img from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import {auth,storage,db} from '../firbase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import {useNavigate,Link} from "react-router-dom"

const Regester = () => {

  const navigate = useNavigate();

  const HandelSubmit = async (e)=>{
      e.preventDefault()
      const name = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];


    try{

      const res =await createUserWithEmailAndPassword(auth, email, password);


      const storageRef = ref(storage, 'images/rivers.jpg');

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        }, 
        (error) => {
        }, 
        () => {

          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
              await updateProfile(res.user,{
                  displayName:name,
                  photoURL:downloadURL
              })

              await setDoc(doc(db, "user", res.user.uid), {
                uid:res.user.uid,
                displayName:name,
                email,
                photoURL:downloadURL
              });

              await setDoc(doc(db, "userChat", res.user.uid), {})

              navigate('/')
          });
        }
      );

    }catch(err){
      console.log(err)
    }

   
  }

  return (
    <div className="w-full h-screen bg-orange-300 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col bg-white w-[300px] p-4 py-6 rounded-md shadow-md">
        <span className="text-[20px]">Lama Chat</span>
        <span className=" text-[14px] text-gray-400">Regester</span>
        <form onSubmit={HandelSubmit} className="flex items-center justify-center flex-col mt-4">
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
          You do have a acount? <Link to="/login" className=" text-red-300 cursor-pointer">login</Link>
        </span>
      </div>
    </div>
  );
};

export default Regester;
