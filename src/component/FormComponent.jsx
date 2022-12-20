import "./FormComponent.css";

const FormComponent = () => {
    return(       
        <div className="container">
            {/* สร้างฟอรม์ */}
            <form className="form">        
            {/* Content ภายในฟอรม์ */}        
                <div className="form-control">
                     <label>Username</label>
                     <input type="text" />
                     <small>error massage</small>
                </div>
                <div className="form-control">
                     <label>Email</label>
                     <input type="text" />
                     <small>error massage</small>
                </div>
                <div className="form-control">
                     <label>Password</label>
                     <input type="text" />
                     <small>error massage</small>
                </div>
                <div className="form-control">
                     <label>Confirm Password</label>
                     <input type="text" />
                     <small>error massage</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default FormComponent;