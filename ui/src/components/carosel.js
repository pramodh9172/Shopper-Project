import React from "react";
import './carosel.css'



export const Carosel = () => {
    return (
        <div className="container-fluid carosel-container">

            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#f0e0ff" />
                        </svg>

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Fill Your Cart with Joyful Shopping Experience with Shopper!</h1>
                                <p>Upgrade your shopping experience with Shooper's intelligent cart system</p>
                                <p><a className="btn btn-lg btn-primary" href="/store">Shop Now</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}