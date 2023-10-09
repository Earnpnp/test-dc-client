import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(!!getAccessToken());
  console.log(auth);

  console.log(user);
  const navigate = useNavigate();

  const register = async (input) => {
    const res = await axios.post("/register", input);
    setAccessToken(res.data.token);
    console.log(input);
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post("/login", { email, password });
      setAccessToken(res.data.token);
      const resMe = await axios.get("/users/me");
      setUser(resMe.data.user);
      setAuth(true);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ register, login, logout, user, auth }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;

export { AuthContext, useAuth };
