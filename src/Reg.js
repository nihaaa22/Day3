import { useState } from 'react';
import './Reg.css'
function Register() {
    const [clgId, setClgId] = useState('');
    const [password, setPsw] = useState('');
    const [email, setEm] = useState('');
    const [branchValue, setBranch] = useState('');
    const [gender, setGender] = useState('');
    const [user, setUser] = useState('');

    const getClgId = (event) => {
        const value = event.target.value;
        setClgId(value);
        console.log(value);
    };

    const getPsw = (event) => {
        const value = event.target.value;
        setPsw(value);
        console.log(value);
    };

    const getEm = (event) => {
        const value = event.target.value;
        setEm(value);
        console.log(value);
    };

    const getBranch = (event) => {
        const value = event.target.value;
        setBranch(value);
        console.log(value);
    };

    const getGender = (event) => {
        const value = event.target.value;
        setGender(value);
        console.log(value);
    };

    const submitData = (event) => {
        event.preventDefault();
        const obj = {
            clgId,
            password,
            email,
            branchValue,
            gender,
        };
        setUser(obj);
        console.log(obj);
        console.log(user);
    };

    return (
        <div >
            <div className="register-form" style={{width: '300', padding: '20px', justifyContent: 'center', marginLeft: '700px', marginTop:'100px', border: '1px solid grey' }}>
                <h1>Register</h1>
                <p>Enter your details to register</p>
                <form className='form-group' onSubmit={submitData}>
                    <label>College Id</label>
                    <input type="text" onChange={getClgId} />
                    <label>Password</label>
                    <input type="password" onChange={getPsw} />
                    <label>Email</label>
                    <input type="email" onChange={getEm} />
                    <label>Branch</label>
                    <select className='form-select' value={branchValue} onChange={getBranch}>
                        <option value=''>Select branch</option>
                        <option value='CSE'>CSE</option>
                        <option value='ECE'>ECE</option>
                        <option value='IT'>IT</option>
                        <option value='AIML'>AIML</option>
                        <option value='AIDS'>AIDS</option>
                    </select>
                    <label>Year</label>
                    <select className='form-select' value={branchValue} onChange={getBranch}>
                        <option value=''>Select year</option>
                        <option value='1st year'>1st year</option>
                        <option value='2nd year'>2nd year</option>
                        <option value='3rd year'>3rd year</option>
                        <option value='4th year'>4th year</option>
                    </select>
                    <label>Gender</label>
                    <div style={{ display: 'flex' }}>
                        <input type='radio' checked={gender === "Female"} value='Female' onChange={getGender} />Female
                        <input type='radio' checked={gender === "Male"} value='Male' onChange={getGender} />Male
                        <input type='radio' checked={gender === "Other"} value='Other' onChange={getGender} />Other
                    </div>
                    <button type='submit' className='btn btn-dark'>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
