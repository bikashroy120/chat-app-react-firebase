import Regester from "./page/Regester";
import './App.css'
import Home from "./page/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./page/Login";
import { useContext } from "react";
import { AuthContext } from "./contex/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext)

  console.log(currentUser)

  const ProtcetRougth= ({children})=>{
     if(!currentUser){
       return <Navigate to="/login"/> 
      }
      return children
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<ProtcetRougth ><Home /></ProtcetRougth>} />
        <Route path ="login" element={<Login />}/>
        <Route path ="regester" element={<Regester />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
