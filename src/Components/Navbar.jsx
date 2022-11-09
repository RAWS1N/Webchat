import React, { useContext } from "react";
import {signOut} from 'firebase/auth'
import {auth} from '../firebaseConfig'
import {AuthContext} from '../context/AuthContext'

function Navbar() {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="flex items-center bg-gray-800 h-12 justify-between px-2">
      <div className="flex items-center gap-2 cursor-pointer">
      <img
      alt=""
        src={currentUser.photoURL}
        className="h-8 w-8 rounded-full bg-white object-cover"
       
      />
      <p className="select-none">{currentUser.displayName}</p>
      </div>
      <button className="px-4 py-1 rounded-sm bg-white text-gray-800" onClick={() => signOut(auth)}>Log out</button>
    </div>
  );
}

export default Navbar;
