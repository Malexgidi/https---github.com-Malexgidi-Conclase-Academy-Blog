import React from "react";
import  {useState} from 'react'


const Login= ()=>{

 const [username, setUsername]  = useState('')
 const [password, setPassword]  = useState('')

 const handleLogin = () => {
        console.log('Logging in:', username)
        
        
 };

 

    return(
       <div>
        <h2>Log in to Conclase Blog</h2>
        <p>Enter your details to log in to your account</p>
          <div className="log-box">
          <label htmlFor="username">Username :</label><br />
                    <input type="text" name="username" value={username} 
                    onChange={(e)=> setUsername(e.target.value)} 
                    placeholder="Enter Firstname" required />
                    <br /><br />
                    <label for="password">Password :</label><br />
                    <input type="text" name="password" value={password} 
                    onChange={(e)=> setPassword(e.target.value)} 
                    placeholder="Enter Password" required />
            </div >
            <br /><br />
            <div>
                <button onClick={handleLogin}>Log In</button>
            </div>

            {/* <div className="button-box">
                  <button className="log-button">Sign Up Button </button>
            </div> */}

       </div>
    )
}

export default Login;