import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faShoppingCart  } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand text-primary" href="#">
                    <h2>E-commerce</h2>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <div className="row">
                        <div className="col-md-7 offset-md-1">
                            {/* Search item */}
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="col-md-3 text-dark ms-md-4">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex gap-4" id='listMenu' style={{ "--bs-scroll-height": " 100px" }}>
                                <li className="nav-item" style={{
                                    maxWidth:"150px"
                                }}>
                                    <a href="" className='d-flex'>
                                        <FontAwesomeIcon icon={faUserAlt} />
                                        <ul>
                                            <li>Sing in</li>
                                            <li> Join for free</li>
                                        </ul>
                                        
                                       
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex flex-column " href="#" >
                                    <FontAwesomeIcon icon={faShoppingCart} style={{fontSize:"20px"}}/>
                                    Cart
                                    </a>
                                </li>
                               
                                
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </nav>
    )
}

export default Header