import React from 'react'
import "../Footer/Footer.css"
import mountainview from "../../assets/mountainview2.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Embark on your journey of discovery with<br/> our seamless travel experiences, unlocking the wonders of the world at your fingertips.</p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Booking</a></li>
              <li><a href="">Review</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Connect With Us</h6>
            <ul className="footer-links">
              <li><a href="">Instagram</a></li>
              <li><a href="">Facebook</a></li>
              <li><a href="">Github</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; Made with <span className='heart'>❤</span> Loading Minds
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={mountainview} alt="mountain" />
      </div>
    </footer>
  )
}

export default Footer