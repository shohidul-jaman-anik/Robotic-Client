import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup,faTrophy,faGear,faHandHoldingDollar,faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import BusinessSummery1 from '../../../image/home-page-img/BusinessSummery-1.jpg';
import BusinessSummery2 from '../../../image/home-page-img/BusinessSummery-2.png';
import './BussinessSummery.css'

const BussinessSummery = () => {
    return (
        <div className='BussinessSummery'>
            <div className='container'>
                <div className='row align-items-center justify-content-center g-4 text-center text-xl-start text-md-start'>
                {/*---------- BusinessSummery-content---------  */}
                    <div className='col-12 col-md-6 '>
                        <div className='BusinessSummery-content pb-4'>
                            <h3>About Business Summery</h3>
                            <h2>Konow more about our bussiness</h2>
                        </div>
                        <div className='row align-items-center justify-content-end text-center text-xl-start text-md-start'>
                            {/* ------part-1------------  */}
                                <div className='col-12 col-md-6'>
                                    <div className='BusinessSummery-icon'>
                                    <FontAwesomeIcon icon={faPeopleGroup} />
                                    </div>
                                   <div className='BusinessSummery-project'>
                                    <h3> <CountUp end={27000} duration={5}/>+</h3>
                                    <p>Happy Customer </p>
                                   </div>
                               </div>
                             {/* ------part-2------------  */}   
                                <div className='col-12 col-md-6'>
                                <div className='BusinessSummery-icon'>
                                    <FontAwesomeIcon icon={faTrophy} />
                                    </div>
                                   <div className='BusinessSummery-project'>
                                    <h3> <CountUp end={27000} duration={5}/>+</h3>
                                    <p>Reviews </p>
                                   </div>
                                </div>
                             {/* ------part-3------------  */}    
                                <div className='col-12 col-md-6'>
                                <div className='BusinessSummery-icon'>
                                    <FontAwesomeIcon icon={faGear} />
                                    </div>
                                   <div className='BusinessSummery-project'>
                                    <h3> <CountUp end={27000} duration={5}/>+</h3>
                                    <p>Tools</p>
                                   </div>
                                </div>
                             {/* ------part-4------------  */}    
                                <div className='col-12 col-md-6'>
                                <div className='BusinessSummery-icon'>
                                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                                    </div>
                                   <div className='BusinessSummery-project'>
                                    <h3> <CountUp end={27000} duration={5}/>+</h3>
                                    <p>Annual revenue</p>
                                   </div>
                                </div>
                            </div>
                         <div className='pt-4 '>
                         <button className='common-button'>
                             discover More <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </button> 
                        </div>  
                    </div>
                 {/*---------- BussinessSummery-img---------  */}    
                    <div className='col-12 col-md-6'>
                        <div className='BussinessSummery-img'>
                            <img className='img-fluid' src={BusinessSummery1} alt="" />
                            <img className='img-fluid' src={BusinessSummery2} alt="" />
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default BussinessSummery;