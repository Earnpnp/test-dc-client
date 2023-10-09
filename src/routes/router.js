import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import AddProductPage from "../pages/AddProductPage";

function route() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/addProduct" element={<AddProductPage />} />
      </Routes>
    </>
  );
}

export default route;
