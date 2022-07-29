import React from 'react';
import benifitimg from '../../../image/home-page-img/foreign2.jpg'
import './Benifit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight,faBullseye,faPersonArrowUpFromLine,faShieldHalved,faMarsAndVenusBurst} from '@fortawesome/free-solid-svg-icons';

const Benifit = () => {
    return (
        <div className='benifit'>
            <div className='container'>
                <div className='row g-4 align-items-center'>
                    <div className='col-lg-6 col-12'>
                    <div className='benifit-content'>
                    <h2>Get Benefits of Using Latest Artificial Intelligence Technologies.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <div className='row align-items-center'>
                    <div className='col-12 col-md-6 d-flex align-items-center'>
                        <h4 className='pe-2'><FontAwesomeIcon className='benifit-icon' icon={faBullseye} /></h4>
                            <h4 >Complete Technology Partner</h4>
                        </div>
                        <div className='col-12 col-md-6 d-flex align-items-center'>
                            <h4 className='pe-2'><FontAwesomeIcon className='benifit-icon' icon={faPersonArrowUpFromLine} /></h4>
                            <h4 >Backed By 100% Customer References</h4>
                        </div>
                        <div className='col-12 col-md-6 d-flex align-items-center'>
                        <h4 className='pe-2'><FontAwesomeIcon className='benifit-icon' icon={faShieldHalved} /></h4>
                        <h4 >Fast, Scalable, & Reliable</h4>
                        </div>
                        <div className='col-12 col-md-6 d-flex align-items-center'>
                        <h4 className='pe-2'><FontAwesomeIcon className='benifit-icon' icon={faMarsAndVenusBurst} /></h4>
                        <h4 >The Emerging Tech Exparts</h4>
                        </div>
                    </div>
                    <button className='common-button'>
                    Know Details <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                    </div>
                    </div>
                    <div className='col-lg-6 col-12 ps-lg-5'>
                        <img className='img-fluid' src={benifitimg} alt="" />
                    </div>
                </div>   
          </div>
      </div>
    );
};

export default Benifit;