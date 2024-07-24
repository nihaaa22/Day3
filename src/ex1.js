import React, { useRef,useState } from 'react';
import './ex1.css';

function LoginForm(){
    const reg = useRef(null);
    const psw = useRef(null);
    const [msg,setmsg] = useState('');
    const [reg1,setReg] = useState(null);
    const [ps1, setPs] = useState(null);
    

    const formSubmitted=(event)=>{
        event.preventDefault();
        if (reg1===null && ps1===null){
            setReg(reg.current.value);
            setPs(psw.current.value);
            console.log("Successfully registered!");
            setmsg("logged in");
        }
        
        else if (reg1===reg.current.value && ps1===psw.current.value){
            console.log("Submitted Successfully!");
            setmsg("Correct");
        }
        else{
            console.log("Wrong credentials");
            setmsg("Incorrect");
        }
        //console.log(reg.current.value);
        //console.log(psw.current.value);
        reg.current.value='';
        psw.current.value='';
    }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={formSubmitted}>
        <h2>Login</h2>
        <p>Provide your details to login</p>
        <div className="form-group">
          <label htmlFor="college-id">College Id</label>
          <input
            type="text"
            ref={reg}
            placeholder="College Id"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            ref={psw}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className='btn btn-dark'>Login</button>
      </form>
      <div>
        <h6>{msg}</h6>
      </div>
    </div>
  );
};

export default LoginForm;
