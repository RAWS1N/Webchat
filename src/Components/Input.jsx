import React from "react";
import { IoSendSharp } from "react-icons/io5";
import { SlPaperClip } from "react-icons/sl";
import {BiImageAdd} from 'react-icons/bi'

function Input() {
  return (
    <div className="h-12 bg-white flex px-2 py-2 items-center justify-between">
      <input
        placeholder="type something..."
        className="w-full outline-none h-full"
      />
      <div className="flex items-center gap-4">
        <SlPaperClip />
        <input type="file" className="hidden" id="file" />
        <label htmlFor="file">
          <BiImageAdd className="h-6 w-6" />
        </label>
        <IoSendSharp className="h-6 w-6" />
      </div>
    </div>
  );
}

export default Input;
