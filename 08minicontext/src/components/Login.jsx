import React,{useState,useContext} from 'react'
import UserContext from "../context/UserContext";

function Login() {
    const [username,SetUsername]=useState("");
    const [password,SetPassword]=useState("");
    const {setUser}=useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <>
        
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => SetUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => SetPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
      
    </>
  )
}

export default Login
