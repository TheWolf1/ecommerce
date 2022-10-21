import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const CardProduct = ({ product }) => {


    return (
        <div className="card card__product" style={{ width: "19rem" }}>
            <div className="card__img">
                <img src={product.productImgs[0]} className="card-img-top img1" alt="..." />
                <img src={product.productImgs[1]} className="card-img-top img2" alt="..." />
            </div>

            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <div className="row" >
                    <div className="col-8">
                        <span>Price:</span>
                        <h5>${product.price}</h5>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-end ">
                        <FontAwesomeIcon className='btn btn-primary' icon={faShoppingCart} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardProduct