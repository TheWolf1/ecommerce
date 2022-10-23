import React, { useState } from 'react'
import loginImage from '../assets/images/loginImage.webp'
import FormLogin from '../components/Login/FormLogin';
import FormRegister from '../components/Login/FormRegister';
const Login = () => {
    const [registerMode, setRegisterMode] = useState(false);

    const changeModeRegister = (state)=>{
        setRegisterMode(state);
    }
  return (
    <div className='container-fluid'  id='loginContent'>
        <div className="row">
            <div className="col-md-6 imgContainer">
                <img src={loginImage} alt="" />
            </div>
            <div className="col-md-6 formContainer d-flex justify-content-center align-items-center">
                {
                    registerMode ? 
                    <FormRegister  changeModeRegister={changeModeRegister}/>
                    :
                    <FormLogin  changeModeRegister={changeModeRegister}/>
                }
            </div>
        </div>
    </div>
  )
}

export default Login