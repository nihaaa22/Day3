import {useState} from 'react';
import LoginForm from './ex1';
import RegisterForm from './ex2';

function NavLinks(){
    const [isLog, setIsLog] = useState(true);

    return(
        <div>
            <div style={{display:'flex'}}>
                <button onClick={()=>setIsLog(true)}>Login</button>
                <button onClick={()=>setIsLog(false)}>Register</button>
            </div>
            
            {
                isLog ?
                <div>Login Message<br />
                    <LoginForm />
                    </div>
                
                :
                <div>
                    Register Message
                    <RegisterForm />
                    </div>
                
            }
        </div>
    )
}
export default NavLinks;