import React from "react";
import Something from '../Components/Image.png'



const Signup = ()=>{



    return(

       <> 
       <div className="container"> 
        <div className="section-one">
            <p>Unlock a world of expression and <br/> connection</p>
            <img src={Something} alt='' className="section-image" />
        </div>

        <form className="section-two">
        <div className="form-header"> 
        <p className="title">Sign up</p>
        <p className="subtitle">Enter your details to create an account</p>
        </div>

       
        
        <div className="form-input">
        <div className="form-block">    
        <label htmlFor="">  First Name </label> 
         <input type='text' name="first" placeholder="John" />
        
        <label htmlFor=""> Last Name </label> 
         <input type='text' name="last" placeholder="Doe" />
         </div>
        
         <div> 
        <label htmlFor="">  Username </label><br />
         <input type='text' name="username" placeholder="Johndoe88" />
         </div>

        <div> 
        <label htmlFor="">  Email </label> <br />
          <input type='Email' name="email" placeholder="Johndoe88@gmail.com" />
      
        </div>

        <div> 
        <label htmlFor="">  Password  </label> <br />
        <input type='password' name="password" placeholder="***********" />
        </div>
      <div> 
        <label htmlFor=""> Confirm password </label> <br />
         <input type='password' name="password" placeholder="**********" />
         </div>
     
       </div>
       

      <div> 
      <button className="signup-btn">Sign up</button>
      </div>

      <p>Already have an account ? <span>login here</span></p>
       </form>
     


       </div>
    

     
            
              
       
      
       </>
       
   
       
    )
}

export default Signup;