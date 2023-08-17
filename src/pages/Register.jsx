import React from "react";
import Logo from "../img/tpr_logo_circle.png"
const Register = () => {
  return (
    <div className="form_container">
      <div className="form_wrapper">
      
        <span className="logo">
        <img src={Logo} width={"25px"}/>
        &nbsp;TP Robotics
        </span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" name="" id="" placeholder="username" />
          <input type="password" name="" id="" placeholder="password"/>
          <input type="email" name="" id="" placeholder="email"/>
          <label htmlFor="file">
            
          </label>
          <button>Register</button>
        </form>

        <p>
          You already have an account ? Log in 
          <a href="#"> here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
