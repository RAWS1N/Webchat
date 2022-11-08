import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import Messages from "./Messages";
import Input from './Input'

function Chat() {
  return (
    <div className="w-9/12 bg-gray-100">
      <div className="flex justify-between px-2 items-center text-white bg-gray-600 h-12">
        <p>Alina</p>
        <div className="flex gap-4 items-center">
          <BsFillCameraVideoFill className="h-5 w-5 cursor-pointer" />
          <AiOutlineUserAdd className="h-5 w-5 cursor-pointer" />
          <FiMoreHorizontal className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  );
}

export default Chat;
