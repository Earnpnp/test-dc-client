import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav className="w-full px-14 z-50 fixed flex justify-center items-center">
        <div className="w-full md:w-880 p-4 flex items-center bg-white">
          <a href="/" className="text-lg text-black font-medium cursor-pointer">
            Clock
          </a>

          <div className="hidden md:flex justify-end gap-6 ml-6 flex-1">
            <a href="/login" className="duration-100 ease-in-out">
              Login
            </a>
            <a href="/register" className="duration-100 ease-in-out">
              Register
            </a>
          </div>

          <div
            className="block md:hidden ml-auto cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <HiBars3 className="text-2xl text-slate-500" />
          </div>

          {isActive && (
            <div
              className="md:hidden p-4 w-[220px] h-[140px] bg-white rounded-lg fixed top-14 right-8 flex 
            flex-col items-center justify-evenly gap-6"
            >
              <a href="/login" className="duration-100 ease-in-out">
                Login
              </a>
              <a href="/register" className="duration-100 ease-in-out">
                Register
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
