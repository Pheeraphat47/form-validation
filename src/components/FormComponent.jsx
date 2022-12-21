import React from "react";
import { useState } from "react";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

const FormComponent = () => {

    const [userName, setUserName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    /* สร้าง State สำหรับ  Error Message*/
    const [errorUserName, setErrorUserName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    /* state เก็บสีและแสดงค่าสถานะ*/

    const [userNameColor, setUserNameColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmpasswordColor, setConfirmpasswordColor] = useState("");

    /* function validateform */
    const validateForm = (e) => {
        e.preventDefault();
        if (userName.length > 8) {
            setErrorUserName("");
            setUserNameColor("limegreen");
        } else {
            setErrorUserName("Username should be at least 8 characters.");
            setUserNameColor("red");
        }
        if (email.includes("@")) {
            setErrorEmail("");
            setEmailColor("limegreen");
        } else {
            setErrorEmail("Invalid email format");
            setEmailColor("red");
        }

        if (password.length > 8) {
            setErrorPassword("");
            setPasswordColor("limegreen");
        } else {
            setErrorPassword("Password must be at least 8 characters.");
            setPasswordColor("red");
        }
        if (confirmpassword != "" && confirmpassword === password) {
            setErrorConfirmPassword("");
            setConfirmpasswordColor("limegreen");
        } else {
            setErrorConfirmPassword("Password does not match");
            setConfirmpasswordColor("red");
        }
    };

    // สร้าง state 
    const [type, setType] = useState('password'); // ค่าเริ่มต้นที่กรอกเป็นแบบ password
    const [icon, setIcon] = useState(eyeOff); // ค่าเริ่มต้นของลูกตาเป็นแบบลูกตาปิด

    // function สำหรับเช็คชนิดข้อมูลที่กรอกและแสดงสถานะลูกตา
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        }
        else {
            setIcon(eyeOff);
            setType('password');
        }
    }

    return (
        <div className="container">
            {/* function สำหรับตรวจสอบ state */}
            <form className="form" onSubmit={validateForm}>
                {/* Content ภายในฟอรม์ */}
                <h1>Registration Form</h1>
                <div className="form-control">
                    <label>Username</label>
                    {/*ข้อมูลที่ User กรอก จะถูกเก็บใน State userName */}
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        style={{ borderColor: userNameColor }}
                    />
                    <small style={{ color: userNameColor }}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => SetEmail(e.target.value)}
                        style={{ borderColor: emailColor }}
                    />
                    <small style={{ color: emailColor }}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input
                        type={type}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ borderColor: passwordColor }}
                    />
                    {/* Icon ลูกตา */}
                    <span className="eyeoff" onClick={handleToggle}><Icon icon={icon} size={20} /></span>
                    <small style={{ color: passwordColor }}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>Confirm Password</label>
                    <input
                        type={type}
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={{ borderColor: confirmpasswordColor }}
                    />
                    {/* Icon ลูกตา */}
                    <span className="eyeoff" onClick={handleToggle}><Icon icon={icon} size={20} /></span>
                    <small style={{ color: confirmpasswordColor }}>{errorConfirmPassword}</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );

};

export default FormComponent;
