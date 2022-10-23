import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardShopin from '../components/shopincart/CardShopin';

const Purchase = () => {
    const cartProducts = useSelector(state => state.cartGlobal);
    const [sumTot, setSumTot] = useState(0)


   
    return (
        <div className='container mt-5 pt-5'>
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <h2>Purchase</h2>
                    </div>
                </div>
                <div className="card-body ">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <form action="">
                                        <div className="form-group my-3">
                                            <label htmlFor="street">Street:</label>
                                            <input type="text" className="form-control" id="street" placeholder='Av. Mariano Acosta' />
                                        </div>
                                        <div className="form-group my-3">
                                            <label htmlFor="colony">Colony:</label>
                                            <input type="text" className="form-control" id="colony" placeholder='Av. Mariano Acosta' />
                                        </div>
                                        <div className="form-group my-3">
                                            <label htmlFor="zipCode">ZipCode:</label>
                                            <input type="text" className="form-control" id="zipCode" placeholder='Av. Mariano Acosta' />
                                        </div>
                                        <div className="form-group my-3">
                                            <label htmlFor="city">City:</label>
                                            <input type="text" className="form-control" id="city" placeholder='Av. Mariano Acosta' />
                                        </div>
                                        <div className="form-group my-3">
                                            <label htmlFor="references">References:</label>
                                            <input type="text" className="form-control" id="references" placeholder='Av. Mariano Acosta' />
                                        </div>

                                        <div className="form-group my-3">
                                            <button className='btn btn-primary w-100'>Hacer pedido</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="border-bottom">
                                {
                                    cartProducts?.map(item => (
                                        <CardShopin key={item.id} item={item} />
                                    ))
                                }
                            </div>
                            <div className="">
                                <h2 className='d-flex justify-content-between'>Total: <span>${sumTot}</span></h2>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Purchase