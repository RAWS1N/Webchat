import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { doc, setDoc } from "firebase/firestore";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");

  function handleFileChange(e) {
    e.preventDefault();
    const fileRef = e.target.files[0];
    setFile(fileRef);
  }

  function handleChange(e) {
    e.preventDefault();
    setLoading(true);
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const storageRef = ref(storage, formData.username);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (err) => setError(err.message),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            try {
            await updateProfile(res.user, {
              displayName: formData.username,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: formData.username,
              email: formData.email,
              photoURL: downloadURL,
            });
              await setDoc(doc(db, "userChats",res.user.uid),{});
            }
            catch (err){
              setError(err.message)
            
            }
          });
        }
      );
            // 
      // setFormData({ username: "", email: "", password: "" });
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <div className="w-screen  h-screen flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500">
      <div className="bg-gray-200 rounded-lg shadow-gray-300 flex shadow-sm flex-col items-center   h-3/4 w-1/2 justify-center">
        <h1 className="m-4 text-2xl font-medium">Web Chat</h1>
        <h4 className="mb-4 ">Register</h4>
        <form onSubmit={handleSubmit} className="flex flex-col  w-2/4 gap-4">
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border-2 border-gray-600 rounded-sm px-2 py-1"
            type="text"
            placeholder="user name"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 w-full border-gray-600 rounded-sm px-2 py-1"
            type="email"
            placeholder="email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border-2 border-gray-600 rounded-sm px-2 py-1"
            type="password"
            placeholder="password"
          />
          <input
            className="hidden"
            type="file"
            name="file"
            onChange={handleFileChange}
            id="file"
          />
          <label htmlFor="file">
            <div className="flex items-center gap-2">
              <img src="images/picture.png" alt="upload" />
              <p>Add an avatar</p>
            </div>
          </label>
          <button className="bg-gray-800 text-white px-8 py-1">Sign up</button>
        </form>
        <p className="my-4">Already have an account? Login</p>
        {error && <p className="text-red-500 my-2">{error}</p>}
      </div>
    </div>
  );
}

export default Register;
