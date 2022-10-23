import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from '../components/home/Slider'
import CardProduct from '../components/shared/CardProduct'
import {getProductsThunk} from '../store/slices/products.slice'
const Home = () => {
    const products = useSelector(state => state.productsGlobal);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getProductsThunk());
    },[]);

   
    return (
        <div className='container mt-5 pt-5'>
            <Slider />
            <div className="row mt-5 border-bottom">
                <div className="col-md-12">
                    <h3>TODOS LOS PRODUCTOS</h3>
                </div>
            </div>
            <div className="row mt-4 d-flex gap-4 justify-content-center">
                {
                    products?.map(product=>(
                        <CardProduct key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home