import React from 'react';
import logo1 from '../../../image/home-page-img/logo1.png'
import logo2 from '../../../image/home-page-img/logo2.png'
import logo3 from '../../../image/home-page-img/logo3.png'
import logo4 from '../../../image/home-page-img/logo4.png'
import './LogoArea.css'

const LogoArea = () => {
    return (
        <div className='logo-area'>
            <div className='container'>
                <div className='row g-4 justify-content-around'>
                    <div className='col-6 col-md-3'>
                        <div className='logo-item'>
                            <img src={logo1} alt="" />
                        </div>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className='logo-item'>
                        <img src={logo2} alt="" />
                        </div>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className='logo-item'>
                        <img src={logo3} alt="" />
                        </div>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className='logo-item'>
                        <img src={logo4} alt="" />
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    );
};

export default LogoArea;