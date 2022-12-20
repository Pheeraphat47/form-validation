import React from 'react';
import { useState } from 'react';

const FormComponent = () => {
    const [userName,setUserName] = useState('');
    const [email,SetEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmpassword,setConfirmPassword] = useState('');



    /* สร้าง State สำหรับ  Error Message*/
    const [errorUserName , setErrorUserName] = useState('');
    const [errorEmail,setErrorEmail] = useState('');
    const [errorPassword,setErrorPassword] = useState('Password must be at least 8 characters.');
    const [errorConfirmPassword,setErrorConfirmPassword] = useState('Password does not match');


    /* function validateform */
    const validateForm = (e) => {
        e.preventDefault()
        if(userName.length > 8){
            setErrorUserName('');
        }else{
            setErrorUserName('Username should be at least 8 characters.');
        }
        if(email.includes("@")){
            setErrorEmail('');
        }else{
            setErrorEmail('Invalid email format');
        }
    }
    return(       
        <div className="container">
            {/* function สำหรับตรวจสอบ state */}
            <form className="form" onSubmit={validateForm}>        
            {/* Content ภายในฟอรม์ */}        
                <h1>Registration Form</h1>
                <div className="form-control">
                     <label>Username</label>
                     {/*ข้อมูลที่ User กรอก จะถูกเก็บใน State userName */}
                     <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                     <small>{errorUserName}</small>
                </div>
                <div className="form-control">
                     <label>Email</label>
                     <input type="text" value={email} onChange={(e)=>SetEmail(e.target.value)}/>
                     <small>{errorEmail}</small>
                </div>
                <div className="form-control">
                     <label>Password</label>
                     <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                     <small>{errorPassword}</small>
                </div>
                <div className="form-control">
                     <label>Confirm Password</label>
                     <input type="text" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                     <small>{errorConfirmPassword}</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default FormComponent;