import React from 'react';
import './FooterStyles.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
      <>
        <div className="footer">
                <div className="content">
                    <div className="rights">
                        <p>Copyright &copy; 2023. All rights reserved.</p>
                    </div>  
                    <div className="footer-bottom">
                        <FaFacebook size={20} style={{ color: '#d3d3d3', marginRight: '10px' }} />
                        <FaInstagram size={20} style={{ color: '#d3d3d3', marginRight: '10px' }} />
                        <FaLinkedin size={20} style={{ color: '#d3d3d3', marginRight: '10px' }} />
                        <FaYoutube size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                    </div>
                </div>
            </div>
            </>
  )
}

export default Footer