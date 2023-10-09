import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { BsFillEyeSlashFill, BsEyeFill } from "react-icons/bs";
import Footer from "./Footer";

function RegisterForm() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      console.log("Email:", email);
      console.log("Password:", password);
      await register({ email, password });
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-96">
          <h1 className="text-5xl font-semibold text-center mb-10">Register</h1>

          <form onClick={handleRegister}>
            <div className="mb-4">
              <label className="mb-2 block">Email</label>
              <input
                type="text"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:outline-none focus:ring focus:border-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 relative">
              <label className="mb-2 block">Password</label>
              <input
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none pr-12 focus:outline-none focus:ring focus:border-blue-300"
                type={passwordShown ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                className="absolute top-0 right-0 mt-12 mr-4 text-lg"
                onClick={togglePassword}
                type="submit"
              >
                {passwordShown ? <BsEyeFill /> : <BsFillEyeSlashFill />}
              </button>
            </div>

            <div className="text-center mt-6">
              <button className="py-3 w-96 text-xl text-white bg-black rounded-lg">
                Create your account
              </button>

              <p className="mt-8 text-sm">
                Already have an account ?&nbsp;&nbsp;
                <a href="/login" className="underline cursor-pointer">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterForm;
