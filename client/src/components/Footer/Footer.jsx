import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import './footer.css';


const Footer = () => {
  return (
    <footer>
        <div className="footer-information">
          <div className="footer-contact">
            <div className="footer-title">Contact US</div>
            <div>Call us 24/7</div>
            <div>1234567789</div>
            
            <div>adriandamii@email.com</div>
            <div className="logo-contact">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com"
              >
                <BsFacebook />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com"
              >
                <BsInstagram />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.twitter.com"
              >
                <BsTwitter />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="footer-quick-links">
            <div className="footer-title">Quick Links</div>
            <div>Terms Of Use</div>
            <div>Terms & Conditions</div>
            <div>Refund Policy</div>
            <div>FAQs</div>
            <div>404 Page</div>
          </div>
          <div className="footer-company">
            <div className="footer-title">Company</div>
            <div>About us</div>
            <div>Affiliate</div>
            <div>Career</div>
            <div>Contact us</div>
          </div>
          <div className="footer-business">
            <div className="footer-title">Business</div>
            <div>Our blog</div>
            <div>Cart</div>
            <div>My account</div>
            <div>Shop</div>
          </div>
        </div>
        <div className='category-tags'>
          
        </div>
        <div className="copyrights">
          <div className="copyright">
            <div> © 2022 MARKET. All rights reserved.</div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
