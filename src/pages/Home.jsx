import React from "react";
import { SidebarContainer } from "../Containers";
import { Chat } from "../Components";

function Home() {
  return (
    <div className="bg-gradient-to-b h-screen flex items-center justify-center from-purple-500 to-pink-500">
      <div className="w-10/12 h-5/6 flex border overflow-hidden rounded-lg">
        <SidebarContainer />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
