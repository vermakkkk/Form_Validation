import React, { useEffect, useState } from 'react';

import './App.css'
function App() {
 
  const [values, setVelue] = useState(
    {
      fullname :"",
      emailaddress: "",
      mobile:"",  
      password: "",
    }
  )


},[values])
 const [submitted,setSubmitted]=useState(false)
 
 function handleSubmit(e) {
   console.warn(values)
    e.preventDefault();
    if(values.fullname && values.emailaddress && values.mobile && values.password){
     setErr(true);
      console.log("enter all fields")
    }
    setSubmitted(true)
    
    setVelue(
      {
        fullname : e.target.reset(),
        emailaddress: e.target.reset(),
        mobile: e.target.reset(),  
        password: e.target.reset(),
      }
    )
   
  }
  function formFullName(e){
    setVelue({...values, fullname : e.target.value})
  }
  function formEmailAddress(e){
    setVelue({...values, emailaddress : e.target.value})
  }
  function formMobileNumber(e){
    setVelue({...values, mobile : e.target.value})
  }
  function formPassword(e){
    setVelue({...values, password : e.target.value})
  }
  return (
    <div className="App">
      <h1 >Form Validation</h1>
      <div className='container'>
      <form onSubmit={handleSubmit}>
        {submitted && err ? <div><h3>Form is submitted successfully</h3></div>: null}
                
        <input type='text' 
        value={values.fullname}
        placeholder='enter full name'
        onChange={formFullName}
        name="fullname"
        />
        {submitted && !values.fullname && !err ? <span>Please enter fullname</span> :null}
      

        <input type="text" 
        value={values.emailaddress}
        placeholder='enter your email' 
        onChange={formEmailAddress}
        name='emailaddress'
        />
        {submitted && !values.emailaddress && !err ? <span>Please enter fullname</span> :null}
        
        
        <input type="text"   
         placeholder='enter mobile number'
         onChange={formMobileNumber}
         name='mobile'
         />
        {submitted && !values.mobile && !err ? <span>Please enter mobile number</span> :null}
    
       <input type="password" 
       placeholder="enter your password"
       onChange={formPassword}
     
       />
       {submitted && !values.password && !err ? <span>enter your password</span> : null}
         
        <button className='btn'>Sumbit</button>
      </form>
      </div>
    </div>
  );
}

export default App;
