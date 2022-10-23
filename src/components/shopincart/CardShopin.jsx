import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { getToken } from '../../config/getToken';
import { useDispatch } from 'react-redux';
import { getCartThunk } from '../../store/slices/cart.slice';
import { getSumCartThunk } from '../../store/slices/sumCart.slice';

const CardShopin = ({ item }) => {



    const dispatch = useDispatch()
    const deleteItem = (id)=>{
        axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`,getToken())
            .then(res=>{
                dispatch(getCartThunk())
                dispatch(getSumCartThunk())
               
            })
            .catch(err=>console.log(err))
     
    }


    const addInItem = (id, quantity)=>{
        let data = {
            id:id,
            newQuantity: parseInt(quantity)+1 
        }
        axios.patch("https://ecommerce-api-react.herokuapp.com/api/v1/cart",data,getToken())
                .then(res=>{
                    dispatch(getCartThunk())
                    dispatch(getSumCartThunk())
                })
                .catch(err=>console.log(err))
        
    }

    const removeInItem = (id, quantity)=>{
        let data = {
            id:id,
            newQuantity: parseInt(quantity)-1 
        }
        axios.patch("https://ecommerce-api-react.herokuapp.com/api/v1/cart",data,getToken())
                .then(res=>{
                    dispatch(getCartThunk())
                    dispatch(getSumCartThunk())
                })
                .catch(err=>console.log(err))
        
    }

  
    return (
        <div className="card mb-3" >
            <div className="row g-0">
              
                <div className="col-md-12">
                    <div className="card-body">
                        <h5 className="card-title">
                            <div className="row">
                                <div className="col-10">
                                  {item.title}  
                                </div>
                                <div className="col-2">
                                    <FontAwesomeIcon icon={faTrash}  style={{color:"red"}} onClick={()=>deleteItem(item.id)}/>
                                </div>
                            </div>
                            
                            </h5>
                        <p className="card-text">Price: ${item.price} x {item.productsInCart.quantity} = ${ ((parseFloat(item.price) * parseFloat(item.productsInCart.quantity))) }</p>
                        <span className='d-block'>Cantidad:</span>
                        <button className='btn btn-primary me-2' onClick={()=>removeInItem(item.id, item.productsInCart.quantity)}>-</button>
                        <span>{item.productsInCart.quantity}</span>
                        <button className='btn btn-primary ms-2' onClick={()=>addInItem(item.id, item.productsInCart.quantity)}>+</button>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardShopin