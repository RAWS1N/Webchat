import React from "react";

function Message() {
  return (
    <div className="flex my-2  gap-4">
      <div className="flex flex-col items-center">
        <img
          src="images/user_2.jfif"
          className="h-6 w-6 object-cover rounded-full"
          alt=""
        />
        <p className="text-sm text-gray-500">Just now</p>
      </div>
      <div className="max-w-sm">
        <p className="bg-gray-500 px-2 my-2 py-1 text-white rounded-sm">
          Message
        </p>
        <img src="images/user_2.jfif" alt="image" className="h-18 w-18" />
      </div>
    </div>
  );
}

export default Message;
