import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css';
import AuthContext from './context/ContextProvider'


function Index() {
    const navigate = useNavigate()
    const { userId, setUserId } = useContext(AuthContext)
    const { superuser, setsuperuser } = useContext(AuthContext)

    const [loggedid, setloggedid] = useState("")
    const [users, setusers] = useState([])

    console.log(superuser)
    const logout = (e) => {
        setUserId("")
        setsuperuser(false)
        localStorage.removeItem("userId")
        localStorage.removeItem("superuser")
        navigate("/store")
    };

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                    
                    <div style={{ display: "inline-block" }}>
                    <img alt="shopper" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/301px-Bootstrap_logo.svg.png"
                    width="40"height="30" />
                    <div style={{ display: "inline-block"}}><h2>Shopper</h2></div>
                    </div>
                    </a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent" >
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-10">
                            
                            <li className="nav-item">
                                <a className="nav-link text-uppercase" href="store">SHOP</a>
                            </li>
                            {localStorage.getItem('superuser') == 'true'  && <li className="nav-item">
                                <a className="nav-link text-uppercase" href="AddProduct" >ADD PRODUCT</a>
                            
                            </li>}

                            <li className="nav-item">
                            <a className="nav-link text-uppercase" href="/">Addpost</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase" href="/">ContactUs</a>
                            </li>
                            
                        </ul>
                        <div className="d-flex justify-content-between ms-auto me-auto">
                            <div className="dropdown">
                                <i className="fas fa-user fa-lg dropdown-toggle navbar-icon" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                {!userId && <a className="dropdown-item" href="login">Login</a>}
                                            </li>
                                            <li>    
                                                {!userId && <a className="dropdown-item" href="signup">Register</a>}
                                            </li>
                                            <li>    
                                                {userId && <a className="dropdown-item" href="Profile">My Account</a>}
                                            </li>
                                            <li>    
                                                {userId && <a className="dropdown-item" href="order">Orders</a>}
                                            </li>
                                            <li>
                                                {userId && <a className="dropdown-item" href="#" onClick={(e) => { logout() }}>Logout</a>}
                                            </li>
                                        </ul>
                            </div>
                            
                            
                        </div>

                        {<a href="/cart">
                        <i className="fas fa-shopping-cart fa-lg navbar-icon position-relative">
                                </i>
                            </a>}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Index