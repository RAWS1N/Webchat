import React,{useState} from "react";

function Register() {
  const [formData,setFormData] = useState({username:"",email:"",password:'',file:""})

  function handleChange(e){
    const {name,value} = e.target
    setFormData(prevState => ({...prevState,[name]:value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
    setFormData({username:"",email:"",password:""})
    
  }

 
   

  return (
    <div className="w-screen  h-screen flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500">
      <div className="bg-gray-200 rounded-lg shadow-gray-300 flex shadow-sm flex-col items-center   h-3/4 w-1/2 justify-center">
        <h1 className="m-4 text-2xl font-medium">Web Chat</h1>
        <h4 className="mb-4 ">Register</h4>
        <form onSubmit={handleSubmit} className="flex flex-col  w-2/4 gap-4">
          <input
            name='username'
            onChange={handleChange}
            className="border-2 border-gray-600 rounded-sm px-2 py-1"
            type="text"
            placeholder="user name"
          />
          <input
            name="email"
            onChange={handleChange}
            className="border-2 w-full border-gray-600 rounded-sm px-2 py-1"
            type="email"
            placeholder="email"
          />
          <input
            name="password"
            onChange={handleChange}
            className="border-2 border-gray-600 rounded-sm px-2 py-1"
            type="password"
            placeholder="password"
          />
          <input className="hidden" type="file" name="file" onChange={handleChange}  id="file"/>
          <label htmlFor="file">
            <div className="flex items-center gap-2">
            <img src="images/picture.png" alt="upload"/>
            <p>Add an avatar</p>
            </div>
          </label>
          <button className="bg-gray-800 text-white px-8 py-1">Sign up</button>
        </form>
        <p className="my-4">Already have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
