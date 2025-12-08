import React from "react"
import "./Footer.css"
import { assets } from "../../assets/assets"
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    {/* <img src={assets.logo1} alt="" /> */}
                    <div className="footer-logo">
                        <div className="nbc">NBC</div>
                        <div className="nothing">Nothing before Chai</div>
                    </div>
                    <p>
                    Food is essential for life, providing energy, nutrients, and well-being. It unites people, allowing them to share cultures and experiences. Beyond sustenance, food brings joy, comfort, and endless flavors that connect us to the world.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>QUICK LINKS</h2>
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/menu')}>Menu</li>
                        <li onClick={() => navigate('/about')}>About</li>
                        <li onClick={() => navigate('/contact')}>Contact us</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-9974683342</li>
                        <li>contact@nbc.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 nbc.com - All Right Reserved.
            </p>
        </div>
    )
}

export default Footer
