import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardShopin from '../shopincart/CardShopin';
import { getCartThunk } from '../../store/slices/cart.slice';
import { Link } from 'react-router-dom';


const ShopingCart = () => {

    const itemsCart = useSelector(state => state.cartGlobal)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartThunk())
    }, [])


    return (


        <div className="offcanvas offcanvas-end" data-bs-scroll="true" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Shopping cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {
                    itemsCart ?
                        itemsCart?.map((item) => (
                            <CardShopin key={item.id} item={item} />
                        ))
                        :
                        <></>
                }

            </div>
            <Link to={'/purchase'} className="btn btn-primary w-100">Purchase   </Link>
        </div>
    )
}

export default ShopingCart