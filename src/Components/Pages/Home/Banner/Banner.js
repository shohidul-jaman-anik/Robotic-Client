import React from 'react';
import bg from '../../../image/home-page-img/banner-bg.jpg'
import robot from '../../../image/home-page-img/banner-main.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-area py-5 ' style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat",
        backgroundSize:"cover",position:"relative",backgroundPosition:"center",zIndex:'5',color:"white"
       }}>
        <div className='container'>
            <div className='row g-4 align-items-center'>
                <div className='col-12 col-md-8 '>
                    <h1>Welcome Our Biggest Robotic Manufacture World </h1>
                    <p>Welcome Our Customer.We are always here For your services and we always provide unique and supper extra ordinary Robotic accessories</p>
                    <button className='common-button'>
                     discover More <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button> 
                </div>
                <div className='col-12 col-md-4 '>
                    <div className='img '>
                    <img className='img-fluid' src={robot} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;