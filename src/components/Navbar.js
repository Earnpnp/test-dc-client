import React from "react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { auth, logout } = useAuth();

  return (
    <>
      <nav className="w-full px-14 z-50 fixed flex justify-center items-center">
        <div className="w-full md:w-880 p-4 flex items-center bg-white">
          <a href="/" className="text-lg text-black font-medium cursor-pointer">
            Clock
          </a>

          <div className="flex justify-end gap-6 ml-6 flex-1">
            {auth ? (
              <a href="/" onClick={logout}>
                Logout
              </a>
            ) : (
              <a href="/login" className="duration-100 ease-in-out">
                Login
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
