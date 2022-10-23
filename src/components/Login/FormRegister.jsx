import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';
const FormRegister = ({ changeModeRegister }) => {
    const { register, handleSubmit, reset } = useForm();

    const navigate = useNavigate();
    const submitRegister = (data) => {

        

        let newData = { ...data, role: "admin" }
        console.log(newData);
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users", newData)
            .then(res => {
                /* navigate('/'); */
                changeModeRegister(false)
                
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="card p-4">
            <form className='mb-3' onSubmit={handleSubmit(submitRegister)}>
                <div className="form-title d-flex flex-column align-items-center justify-content-center border-bottom mb-3">
                    <span>Register now.</span>
                    <h2 className='text-primary'> Register now</h2>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="firstName">Firs name:</label>
                    <input type="text" className="form-control" name='firsName' id="firstName" placeholder='Enter your first name:' {...register("firstName")} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="lasttName">Last name:</label>
                    <input type="text" className="form-control" name='lastName' id="lasttName" placeholder='Enter your last name:' {...register("lastName")} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="emial" className="form-control" name='email' id="email" placeholder='Enter your Email:' {...register("email")} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="phone">Phone:</label>
                    <input type="phone" className="form-control" name='phone' id="phone" placeholder='Enter your phone number:' {...register("phone")} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name='password' id="password" placeholder='Enter your password:' {...register("password")} />
                </div>

                <div className="form-group mt-3">
                    <button className='btn btn-primary w-100'>Enter</button>
                </div>
            </form>

            <span style={{ textDecoration: "underline" }} >OR</span>
            <p>you have an acount?  <Link onClick={() => changeModeRegister(false)}>click here.</Link> </p>
        </div>
    )
}

export default FormRegister