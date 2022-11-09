import React,{useState} from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Chats from './Chats'

function Search() {
  const [username, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  async function handleSearch() {
    try {
    const collectionRef = collection(db, "users");
    const Query = query(collectionRef, where("displayName", "==", username));
    const QuerySnapshot = await getDocs(Query);
    QuerySnapshot.forEach(user => setUser(user.data()))
  }
  catch(err){
    setError(err.message)
  }
  }
  

  function handleChange(e) {
    e.preventDefault();
    const { value } = e.target;
    setUserName(value);
  }

  function handleKey(e) {
    e.code === "Enter" && handleSearch();
  }

  return (
    <div className="">
      <form>
        <input
          onChange={handleChange}
          value={username}
          onKeyDown={handleKey}
          type="text"
          placeholder="Find a user"
          className="bg-transparent py-1  border-b-2 border-gray-500 w-full outline-none px-2 "
        />
        <Chats/>
      </form>
    </div>
  );
}

export default Search;
