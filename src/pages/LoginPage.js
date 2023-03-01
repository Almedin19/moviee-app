import React, { useState, useEffect } from "react";
import {
  emailValidator,
  passwordValidator,
} from "../components/regexValidator";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

function LoginPage() {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [succsesMessage, setSuccsesMessage] = useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) navigate("/");
  });

  const formSubmiter = (e) => {
    e.preventDefault();
    setSuccsesMessage("");
    if (
      !emailValidator(input.email) ||
      !passwordValidator(input.password) === ""
    ) {
      alert("Please enter your email and password");
    }
    if (!emailValidator(input.email))
      return setErrorMessage("Please enter valid email ");
    if (!passwordValidator(input.password))
      return toast.error("Please enter valid password");
    //return setErrorMessage("Password not valid");
    //toast.success("Succsessfully");
    // setSuccsesMessage("Succsessfully");
    if (input.email !== "admin@test.com" || input.password !== "Password@1")
      return toast.error("Please enter valid email");
    localStorage.setItem("auth", true);
    toast.success("Succsessfully");
    navigate("/");
  };
  return (
    <>
      <ToastContainer />
      <div className="loginpage">
        <div className="form-container">
          <div className="padding-container">
            <h3 style={{ textAlign: "center" }}>LOGIN</h3>

            <div className="form-control">
              <form onSubmit={formSubmiter}>
                <input
                  type={"email"}
                  name="email"
                  onChange={handleChange}
                  placeholder="admin@test.com"
                />
                <input
                  type={"password"}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password@1"
                />

                {/* <button onClick={() => navigate("/home")}>Login</button> */}
                <button onClick={handleChange}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <marquee scrollamount direction="right" className="marque">
        Copyright &copy; 2023
      </marquee>
    </>
  );
}

export default LoginPage;
