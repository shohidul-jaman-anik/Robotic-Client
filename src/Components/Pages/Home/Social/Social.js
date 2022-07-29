import React from 'react';
import social from '../../../image/home-page-img/social-main.jpg';
import './Social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';

const Social = () => {
    return (
        <div className='container'>
        <div className='social'>
            <div className='row'>
                <div className='col-lg-6 col-12'>
                    <img className='img-fluid' src={social} alt="" />
                </div>
                <div className='col-lg-6 col-12'>
                    <div className='social-content'>
                        <h2>Social Robotics Is The Future</h2>
                        <p>The vision processing solution that uses deep-learning to enable building and depalletizing of mixed-SKU pallets.</p>
                        <button className='common-button'>
                         Know Details <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Social;