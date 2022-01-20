import React, { useState } from "react";
import logo from "../../Assets/Images/login.png";
import "./Register.css";
// import { BsFacebook } from 'react-icons/bs'
// import { FcGoogle } from 'react-icons/fc'
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";

const Register = () => {
  const [enterValue, SetEnterValue] = useState({
    enteredUserName: "",
    enteredUserEmail: "",
    enteredUserPassword: "",
  });

  const { enteredUserName, enteredUserEmail, enteredUserPassword } = enterValue;

  const onEnteredSignupChange = (e) => {
    e.preventDefault();
    SetEnterValue({ ...enterValue, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   onSingupFormSubmit();
  // }, [])

  const loginType = {
    "logintype": "app"
  }

  const onSingupFormSubmit = async (e) => {
    let result = await axios.post("http://103.171.181.46:2081/api/users", {
      email: enteredUserEmail,
      userName: enteredUserName,
      password: enteredUserPassword,
    }, {
      loginType
    })
    console.log(result);
  }



  return (
    <>
      <div className="login-page">
        <Link to="/login">
          <div className="back">
            <IoMdArrowRoundBack />
          </div>
        </Link>
        <Link to="/">
          
          <div className="cancel">
            <MdOutlineCancel />
          </div>
        </Link>
        <div className="logo-login">
          <img src={logo} alt="logo" />
        </div>
        <h4>Welcome to fanfiction</h4>
        <h6 className="access">
          Access tons of novels and comics with free chapters that daily
          updating
        </h6>
        <div className="username">
          <label for="fname">Username</label>
          <input
            type="text"
            id="fname"
            name="enteredUserName"
            onChange={onEnteredSignupChange}
          />
        </div>
        <div className="login-email">
          <label for="fname">E-mail</label>
          <input
            type="email"
            id="fname"
            name="enteredUserEmail"
            onChange={onEnteredSignupChange}
            pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            required
          />
        </div>
        <div className="login-password">
          <label for="fname">Password</label>
          <input
            required
            type="password"
            id="fname"
            name="enteredUserPassword"
            onChange={onEnteredSignupChange}
          />
        </div>
        <button className="sign-button" onClick={onSingupFormSubmit}><p>SignUp</p></button>
        <p className="copyright-a">
          ©2022 Fanfiction | Terms of service | Privacy Policy
        </p>
      </div>
    </>
  );
};

export default Register;