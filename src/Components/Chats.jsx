import React from "react";

function Chats() {
  return (
    <div className="px-2 py-2 my-1 select-none  flex gap-3 cursor-pointer hover:bg-gray-800 items-center">
      <img
        src="images/user_2.jfif"
        className="h-10 w-10 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-medium">Alina</p>
        <p className="text-sm">last message</p>
      </div>
    </div>
  );
}

export default Chats;
