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

    /* state เก็บสีและแสดงค่าสถานะ*/

    const[userNameColor,setUserNameColor] = useState('');
    const[emailColor,setEmailColor] = useState('');


    /* function validateform */
    const validateForm = (e) => {
        e.preventDefault()
        if(userName.length > 8){
            setErrorUserName('');
            setUserNameColor('limegreen');
        }else{
            setErrorUserName('Username should be at least 8 characters.');
            setUserNameColor('red')
        }
        if(email.includes("@")){
            setErrorEmail('');
            setEmailColor('limegreen')
        }else{
            setErrorEmail('Invalid email format');
            setEmailColor('red')
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
                     <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                     <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="form-control">
                     <label>Email</label>
                     <input type="text" value={email} onChange={(e)=>SetEmail(e.target.value)} style={{borderColor:emailColor}}/>
                     <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                     <label>Password</label>
                     <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                     <small>{errorPassword}</small>
                </div>
                <div className="form-control">
                     <label>Confirm Password</label>
                     <input type="password" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                     <small>{errorConfirmPassword}</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default FormComponent;