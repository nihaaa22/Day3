import { useState,useEffect } from "react";
import './ass-2.css'
function Btn(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("Effect is used");
    },[count]);
    const btnSubtract=()=>{
            setCount(count-1);
        console.log('Subtraction')
    }
    const btnAdd=()=>{
            setCount(count+1);
        console.log("Add");
    }
    const btnCart=()=>{
        setCount(1);
    }

    return(
        <div>
            {(count===0) ?
            <div className="btn">
                <button type="button" className="btn btn-light" style={{border:'1px solid orange', backgroundColor:'red'}} onClick={btnCart} >Add to Cart</button>
            </div>
            :      
            <div style={{display:'flex'}}>
                <div>
                    <button type="button" className="btn btn-danger" onClick={btnSubtract} style={{border:'2px solid red'}}>-</button>
                    </div>
                    <div>
                        <button type="btn" className="btn btn-primary" style={{border:'2px solid blue'}}>{count}</button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-success" onClick={btnAdd} style={{border:'2px solid green'}}>+</button>
                    </div>
            </div>
            }        
                
            
        </div>
    )
}
export default Btn;