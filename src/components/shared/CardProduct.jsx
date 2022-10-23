import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getCartThunk } from '../../store/slices/cart.slice';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { getToken} from '../../config/getToken'
import { useDispatch } from 'react-redux'

const CardProduct = ({ product }) => {
    
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const mySwal = withReactContent(Swal);
    
    const addToCart = (id)=>{
        if (localStorage.getItem('token')) {
            let data = {
                id: id,
                quantity: 1
            }

            
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/cart",data,getToken())
                    .then(res=>{
                        Swal.fire(
                            'Succes!',
                            'Prod add Succesfuly',
                            'success'
                          )
                        dispatch(getCartThunk())
                        
                    })
                    .catch(err=>console.log(err))   
          
        } else {
            navigate('/login')
        }
        
    }

    return (
        <div className="card card__product" style={{ width: "19rem" }}>
            <Link to={`/producto/${product.id}`}>
                <div className="card__img">
                    <img src={product.productImgs[0]} className="card-img-top img1" alt="..." />
                    <img src={product.productImgs[1]} className="card-img-top img2" alt="..." />
                </div>
            </Link>
            <div className="card-body">
                <Link to={`/producto/${product.id}`}>
                    <h5 className="card-title">{product.title}</h5>
                </Link>
                <div className="row" >
                    <div className="col-8">
                        <span>Price:</span>
                        <h5>${product.price}</h5>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-end ">
                        <FontAwesomeIcon className='btn btn-primary' icon={faShoppingCart} onClick={()=>addToCart(product.id)}/>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default CardProduct