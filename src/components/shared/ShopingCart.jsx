import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardShopin from '../shopincart/CardShopin';
import { getCartThunk } from '../../store/slices/cart.slice';


const ShopingCart = () => {

    const itemsCart = useSelector(state=> state.cartGlobal)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCartThunk())
    }, [])

   
    return (


        <div className="offcanvas offcanvas-end" data-bs-scroll="true"  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Shopping cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
             {
             itemsCart ?    
                    itemsCart?.map((item)=>(
                        <CardShopin key={item.id} item={item}/>
                    ))
                    :
                    <></>
            } 
                
            </div>

            <button className='btn btn-primary w-100'>Check in</button>
        </div>
    )
}

export default ShopingCart