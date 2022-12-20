import React from 'react';
import { useState } from 'react';

const FormComponent = () => {
    const [userName,setUserName] = useState('');
    const [email,SetEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmpassword,setConfirmPassword] = useState('');
    return(       
        <div className="container">
            {/* สร้างฟอรม์ */}
            <form className="form">        
            {/* Content ภายในฟอรม์ */}        
                <h1>Registration Form</h1>
                <div className="form-control">
                     <label>Username</label>
                     {/*ข้อมูลที่ User กรอก จะถูกเก็บใน State userName */}
                     <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                     <small>error massage</small>
                </div>
                <div className="form-control">
                     <label>Email</label>
                     <input type="text" value={email} onChange={(e)=>SetEmail(e.target.value)}/>
                     <small>error massage</small>
                </div>
                <div className="form-control">
                     <label>Password</label>
                     <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                     <small>error massage</small>
                </div>
                <div className="form-control">
                     <label>Confirm Password</label>
                     <input type="text" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                     <small>error massage</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default FormComponent;