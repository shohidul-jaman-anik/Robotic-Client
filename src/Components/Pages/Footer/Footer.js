import React from 'react';
import './Footer.css'
import footerbg from '../../image/footer/footer-bg.jpg';
import footerlogo from '../../image/footer/logo-two.png';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaPinterest, FaPhoneVolume, FaMapMarkerAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='footer-top' style={{
                backgroundImage: `url(${footerbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", position: "relative", backgroundPosition: "center", zIndex: '5', color: 'white', padding: "70px 0"
            }}>
                <div className='container'>
                    <div className='row g-4 align-items-start'>
                        <div className='col-12 col-lg-3 col-md-6'>
                            <img className='img-fluid' src={footerlogo} alt="" />
                            <p className='py-3'>Our robotic Manufacture always try to give our customers unique and high quality product.we always provide our best service </p>
                            <div className='footer-icon d-flex justify-content-between'>
                                <p className='icon'><FaFacebookF /></p>
                                <p className='icon'><FaTwitter /></p>
                                <p className='icon'><FaPinterest /></p>
                                <p className='icon'><FaLinkedinIn /></p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 col-md-6 '>
                            <div className='ps-md-5'>
                                <h2 className='title'>Get In Touch</h2>
                                <div className='address'>
                                    <h3><FaPhoneVolume className='address-icon' /> Phone</h3>
                                    <p>018628###</p>
                                </div>
                                <div className='address'>
                                    <h3><FaEnvelopeOpenText className='address-icon' /> Email</h3>
                                    <p>anikh499@gmail.com</p>
                                </div>
                                <div className='address'>
                                    <h3><FaMapMarkerAlt className='address-icon' /> Address</h3>
                                    <p>3254-425 NW-2nd Postoghola,Dhaka,Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 col-md-6'>
                            <div className='ps-lg-5'>
                                <h2 className='title'>Useful Links</h2>
                                <ul className='list-unstyled pages'>
                                    <Link className='text-decoration-none' to="/"> <li ><FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon> Home</li></Link>
                                    <Link className='text-decoration-none' to="/"> <li><FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon> About</li></Link>
                                    <Link className='text-decoration-none' to="/"> <li ><FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon> Service</li></Link>
                                    <Link className='text-decoration-none' to="/blog"> <li ><FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon> Blog</li></Link>
                                </ul>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 col-md-6'>
                            <div className='ps-md-5 ps-lg-0 ps-0'>
                                <h2 className='title'>Newsletter</h2>
                                <p>We support to customize minor request as javascript conflict, css issue, etc. Enjoy the ultimate web design themes. Every layout is super flexible, amazingly powerful and visual by nature.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='container'>
                    <p>Copyright &copy;2021 Robtic.</p>
                    <div className='text-white'>
                    All Rights Reserve <span className='text-danger'>Shohidul Jaman Anik</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;