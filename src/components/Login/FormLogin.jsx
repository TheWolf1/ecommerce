import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {setUser} from '../../store/slices/user.slice'
const FormLogin = ({ changeModeRegister}) => {

    const dispatch = useDispatch();
    const userGlobal = useSelector(state => state.userGlobal);
    const {register,handleSubmit,reset} = useForm();
    const navigate = useNavigate();




    const submitLogin = (data)=>{
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login",data)
            .then(res=>{
                localStorage.setItem('token',res.data.data.token)
                let user = JSON.stringify(res.data.data) ;
                localStorage.setItem('user',user);
                dispatch(setUser(res.data.data))
                navigate('/');
            })
            .catch(err=>console.log(err))
        //console.log(data);
    }

    console.log(userGlobal);
    return (
        <div className="card p-4">
            <form onSubmit={handleSubmit(submitLogin)} className='mb-3'>
                <div className="form-title d-flex flex-column align-items-center justify-content-center border-bottom mb-3">
                    <span>Welcome to</span>
                    <h2 className='text-primary'> E-Commerce </h2>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="user">User</label>
                    <input type="email" className="form-control" id="user" name='user' placeholder='Ingresa tu usuario:' {...register('email')}/>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="user">Password</label>
                    <input type="password" className="form-control" id="user" name='password' placeholder='Ingresa tu usuario:' {...register('password')}/>
                </div>

                <div className="form-group mt-3">
                    <button className='btn btn-primary w-100'>Enter</button>
                </div>
            </form>

            <span style={{ textDecoration: "underline" }} >OR</span>
            <p>Register now <Link onClick={()=>changeModeRegister(true)}>click here.</Link> </p>
        </div>
    )
}

export default FormLogin