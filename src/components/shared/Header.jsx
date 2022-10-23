import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faShoppingCart, faRightFromBracket, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/slices/user.slice';
import ShopingCart from './ShopingCart'
import { setProducts } from '../../store/slices/cart.slice';

const Header = () => {
    const userGlobal = useSelector(state => state.userGlobal);
    const dispatch = useDispatch();
    const navigate = useNavigate();



    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        dispatch(setUser(user))
    }, [])

    const logOut = () => {
        dispatch(setUser(''))
        dispatch(setProducts(''))
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    }

  
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand text-primary" href="#">
                        <h2>E-commerce</h2>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <div className="row">
                            <div className="col-md-7 offset-md-1 mt-2">
                                {/* Search item */}
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-primary" type="submit">Search</button>
                                </form>
                            </div>
                            <div className="col-md-3 text-dark ms-md-4">
                                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex gap-4" id='listMenu' style={{ "--bs-scroll-height": " 100px" }}>
                                    <li className="nav-item" style={{
                                        maxWidth: "150px"
                                    }}>
                                        {
                                            userGlobal ?
                                                <Link to={'/'} className='d-flex'>
                                                    <FontAwesomeIcon icon={faUserAlt} />
                                                    <ul>
                                                        <li>Hola</li>
                                                        <li> {userGlobal.user.firstName}</li>
                                                    </ul>

                                                </Link>
                                                :
                                                <Link to={'/login'} className='d-flex'>
                                                    <FontAwesomeIcon icon={faUserAlt} />

                                                    <ul>
                                                        <li>Sing in</li>
                                                        <li> Join for free</li>
                                                    </ul>
                                                </Link>
                                        }
                                    </li>


                                    {
                                        userGlobal ?
                                            <>
                                                <li className="nav-item">
                                                    <a className="nav-link d-flex flex-column " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                        <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "20px" }} />
                                                        Cart
                                                    </a>

                                                </li>
                                                <li className="nav-item">
                                                <Link to={'/purchase'} className="nav-link d-flex flex-column ">
                                                        <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: "20px" }} />
                                                        Purchase
                                                </Link>

                                                </li>
                                                <li>
                                                    <a className="nav-link d-flex flex-column " onClick={logOut}>
                                                        <FontAwesomeIcon icon={faRightFromBracket} style={{ fontSize: "20px" }} />
                                                        Log out
                                                    </a>
                                                </li>
                                            </>

                                            :
                                            <>

                                                <li className="nav-item">
                                                    <Link to={'/login'} className="nav-link d-flex flex-column ">
                                                        <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "20px" }} />
                                                        Cart

                                                    </Link>


                                                </li>
                                            </>
                                    }
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </nav>

            {
                userGlobal ?
                    <ShopingCart />
                    :
                    <></>
            }

        </>

    )
}

export default Header