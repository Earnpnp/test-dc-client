import React from "react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { auth, logout } = useAuth();

  return (
    <>
      <nav className="w-full px-14 z-50 fixed flex justify-center items-center font-poppins">
        <div className="w-full md:w-880 p-4 flex items-center bg-white rounded-b-lg">
          <a
            href="/"
            className="text-[32px] text-black font-medium cursor-pointer font-vidaloka"
          >
            Calendar
          </a>

          <div className="flex justify-end gap-6 ml-6 flex-1">
            {auth ? (
              <>
                <a href="/addProduct" className="flex items-center">
                  Add Product
                </a>
                <a
                  href="/"
                  onClick={logout}
                  className="border-2 py-2 px-4 rounded-lg hover:border-red-400 ease-in-out duration-150"
                >
                  LOGOUT
                </a>
              </>
            ) : (
              <a
                href="/login"
                className="border-2 py-2 px-4 rounded-lg hover:border-green-400 ease-in-out duration-150"
              >
                LOGIN
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
