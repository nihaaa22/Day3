import { useRef, useState } from "react";

function Eleven(){
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
            setmsg("Registered");
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


    return(
        <div style={{display:'flex',  justifyContent:'center', alignItems:'center', marginTop:'50px', marginLeft:'500px' , border:'1px solid black',width:300}}>
            <form onSubmit={formSubmitted} >
                <div>
                    <h2>Login</h2>
                    <p style={{color:'grey'}} >Provide your login details</p>
                </div>
                <div>
                    <h5>College Id</h5>
                    <input type="text" ref={reg} placeholder="College Id" />
                </div>
                <div style={{marginTop:'10px'}}>
                    <h5>Password</h5>
                    <input type="password" ref={psw} placeholder="Password" />
                </div>
                <div style={{marginTop:'10px', marginLeft:'100px'}}>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
                <div>
                    <p>{msg}</p>
                </div>
            </form>
            
            
        </div>
    )
}
export default Eleven;