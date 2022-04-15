import React, { useState } from "react";
import "./SignUp.css";
import logo from "../../images/logo2.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handelName = (event) => {
    setName(event.target.value);
  };
  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  const handelConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    if (password < 6) {
      setError("minimum 6 characters");
    }
    if (password !== confirmPassword) {
      setError("password not match");
    }
  };
  return (
    <div className="text-center ">
      <img className="img-fluid" src={logo} alt="" />
      <div className="d-flex align-content-center justify-content-center p-5">
        <form onSubmit={handelSubmit} className="w-50 d-flex flex-column px-5">
          <input onBlur={handelName} type="text" placeholder="Name" />
          <input onBlur={handelEmail} type="email" placeholder="Email" />
          <input
            onBlur={handelPassword}
            type="password"
            placeholder="Password"
          />
          <input
            onBlur={handelConfirmPassword}
            type="password"
            placeholder="Confirm Password"
          />
          <input className="submit-button" type="submit" value="Sign Up" />
          <button
            className="mt-3 btn btn-link"
            onClick={() => navigate("/login")}
          >
            Already have an account?
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
