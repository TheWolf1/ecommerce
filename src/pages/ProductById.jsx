import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/shared/CardProduct'
import { getProductsThunk } from '../store/slices/products.slice'
import { getToken } from '../config/getToken'
import { getCartThunk } from '../store/slices/cart.slice'




const ProductById = () => {
  const [producto, setProducto] = useState();
  const [quantity, setQuantity] = useState(1);
  const allProduct = useSelector(state => state.productsGlobal);
  const { id } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductsThunk());
    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
      .then(res => setProducto(res.data.data.product))
      .catch(err => console.log(err));
  }, [id])


  const addQuantity = () => {
    setQuantity(quantity + 1);
  }


  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }

  }



  const addToCart = (id) => {
    if (localStorage.getItem('token')) {
      let data = {
        id: id,
        quantity: quantity
      }


      axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/cart", data, getToken())
        .then(res => dispatch(getCartThunk()))
        .catch(err => console.log(err))

    } else {
      navigate('/login')
    }

  }
  return (

    <div className='container mt-5 pt-5' id='productoById'>

      <div className="card p-3 ">
        <div className="row">
          <div className="col-md-12">
            <h1>{producto?.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="container border  h-100" id='containerGalery'>
              <div className="row ">
                <div className="col-md-10 d-flex justify-content-center align-items-center">
                  <div className="con">
                    <img src={producto?.productImgs[0]} alt="" id='mainImage' />
                  </div>

                </div>
                <div className="col-md-2  mt-3">
                  <div className="container_galery">
                    <div className="row">


                      {
                        producto?.productImgs.map(img => (
                          <div key={img} className="container_galery-item border col-md-12 p-4">
                            <img src={img} alt="" />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="col-md-4">
            <div className="infor">
              <div className="infor__description">
                <div className="info__description-title border-bottom">
                  <h2>Description:</h2>
                </div>
                <div className="info__description-content mt-3">
                  {producto?.description}
                </div>
              </div>
              <div className="infor__quantity mt-4">
                <h2>Precio: <span>${producto?.price}</span></h2>
              </div>
              <div className="infor_quantity mt-4">
                <span className='d-block'>Cantidad:</span>
                <button onClick={removeQuantity} className='btn btn-primary me-2'>-</button>
                <span>{quantity}</span>
                <button onClick={addQuantity} className='btn btn-primary ms-2'>+</button>
              </div>
              <div className="infor__addcart mt-4">

                <button className='btn btn-primary w-100' onClick={()=>addToCart(producto?.id)}>
                  <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-bottom mt-5">
        <h2>Productos relacionados:</h2>
      </div>
      <div className="row mt-4 d-flex gap-4 justify-content-center">
        {
          allProduct?.map(product => {
            if (product.category.name == producto?.category) {
              //console.log(product.category.name);
              if (product.id != producto?.id) {
                return (
                  <CardProduct key={product.id} product={product} />
                );
              }




            }

          })
        }

      </div>
    </div>
  )
}

export default ProductById