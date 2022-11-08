import React from "react";

function Navbar() {
  return (
    <div className="flex items-center bg-gray-800 h-12 justify-between px-2">
      <div className="flex items-center gap-2 cursor-pointer">
      <img
      alt=""
        src="images/user_2.jfif"
        className="h-8 w-8 rounded-full bg-white object-cover"
       
      />
      <p className="select-none">Alina</p>
      </div>
      <button className="px-4 py-1 rounded-sm bg-white text-gray-800">Log out</button>
    </div>
  );
}

export default Navbar;
