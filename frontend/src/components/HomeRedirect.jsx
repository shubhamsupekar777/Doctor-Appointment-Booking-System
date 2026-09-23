import React,{useContext} from "react";
import {Navigate} from "react-router-dom";
import {AppContext} from "../context/AppContext";
import Home from "../pages/Home";

const HomeRedirect=()=>{
    const {token}=useContext(AppContext);
    return token?<Navigate to="/my-appointments" replace/>:<Home/>;
};

export default HomeRedirect;