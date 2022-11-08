import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

function Sidebar() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Chats/>
      <Chats/>
      <Chats/>  
    </div>
  );
}

export default Sidebar;
