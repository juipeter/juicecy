import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import LogAdmin from "./LoginAdmin";
import CreateGuard from "./CreateGuard";
import Report_Main from "./Report_Main"
import { useRef, useState, useEffect, useContext } from "react";

function LoginAdimn() {
  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem('token');
    fetch("http://localhost:3001/authen", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        'Authorization':'Bearer '+token
  
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status=='ok'){
          alert("WELLCOME ADMIN");
       
         
          localStorage.setItem('token',data.token);
    
         
          
          
        }else{
          alert('Authen faide')
          window.location='/'
        }
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },[])
  const handleOut =(event) => {

   event.preventDefault();
   localStorage.removeItem('token');
   window.location="/"
  }

  const nextcreateOwner = () => {
    // 👇️ navigate to /contacts
    navigate("/createowner");
  };
  const nextcreateGuard = () => {
    // 👇️ navigate to /contacts
    navigate("/createguard");
  };

  const nextreortmain = () => {
    // 👇️ navigate to /contacts
    navigate("/reportmain");
  };

  return (
    <div className="App container">
    
      <br />
      <br />
      <br />
      <div
        className="bottonhead"
        style={{
          display: "inline-grid",
          "justify-content": "center",
          height: "auto",
          width: "auto",
        }}
      >
        <div className="imgxx">
          <img  className="imgCC" 
            style={{
              height: "75px",
              width: "240px",
            }}
            src="/images/pngtext/userCreate.png"
          />
          <button className="btn-css" onClick={nextcreateOwner}>
            Register Owner
          </button>
        </div>
        <br />
        <div className="imgxx">
          <img className="imgCC"
            style={{
              height: "75px",
              width: "240px",
            }}
            src="/images/pngtext/guard.png"
          />
          <button className="btn-css" onClick={nextcreateGuard}>Create Security Guard</button>
        </div>
        <br />
        <div className="imgxx">
          <img className="imgCC"
            style={{
              height: "75px",
              width: "240px",
            }}
            src="/images/pngtext/report.png"
          />
          <button className="btn-css" onClick={nextreortmain}>Report</button>
        </div>
        <br />
        <div className="imgxx">
          <img className="imgCC"
            style={{
              height: "75px",
              width: "240px",
            }}
            src="/images/pngtext/exit.png"
          />
          <button className="btn-css" onClick={handleOut}>Exit</button>
        </div>
        <br />
      </div>
   
    </div>
  );
}

export default LoginAdimn;
