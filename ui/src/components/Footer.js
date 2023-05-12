import React from "react";
import './Footer.css'


export const Footer = () => {
  
  return (

    <footer className="footer mt-auto pt-0 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-6" style={{ textAlign: 'center' }}>
            <div className="copyright mb-30">
              <div className="footer-logo">
                <a href="/"><img alt=""
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/301px-Bootstrap_logo.svg.png" /></a>
              </div>
              <p>
                © 2021 <a href="/" target="_blank">Shopper</a>.<br />
                All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li><a href="/">About us</a></li>
                  <li><a href="/">Store location</a></li>
                  <li><a href="/">Contact</a></li>
                  <li><a href="/">Orders tracking</a></li>
                </ul>
              </div>
            </div>

          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-widget mb-30 ml-50">
              <div className="footer-title">
                <h3>USEFUL LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li><a href="/#/">Returns</a></li>
                  <li><a href="/#/">Support Policy</a></li>
                  <li><a href="/#/">Size guide</a></li>
                  <li><a href="/#/">FAQs</a></li>
                </ul>
              </div>
            </div>

          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-widget mb-30 ml-75">
              <div className="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a href="//www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                  </li>
                  <li>
                    <a href="//www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                  </li>
                  <li>
                    <a href="//www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </li>
                  <li>
                    <a href="//www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer-widget mb-30 ml-70">
              <div className="footer-title">
                <h3>SUBSCRIBE</h3>
              </div>
              <div className="subscribe-style">
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <div>
                  <div className="subscribe-form">
                    <div className="mc-form">
                      <div>
                        <input id="mc-form-email" className="email" type="email" placeholder="Enter your email address..." />
                      </div>
                      <div className="clear">
                        <button className="button">SUBSCRIBE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>

  )
}