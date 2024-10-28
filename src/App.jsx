import React, { useState } from "react";
import { useSelector }from 'react-redux'
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";

const App = () => {
  const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated);
  const [isLogin,setisLogin]=useState(true)
  const toggleForm=()=>{
    setisLogin(!isLogin)
  }
  if (isAuthenticated) {
    return <Dashboard />;
  }
  return 
  <>
    {isLogin?<Login/>:<SignUp/>}
    <button onClick={toggleForm}>
   {isLogin?'need an signup':'login'}
    </button>
  </>;
};

export default App;
