import React from 'react';
import bookimg from '../../image/home-page-img/book-main.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './Book.css'

const Book = () => {
    return (
        <div className='book'>
            <div className='container'>
                <div className='book-area d-lg-block d-none' style={{ backgroundImage: `url(${bookimg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", }}>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='book-img'>
                            </div>
                        </div>
                        <div className='col-lg-8 book-row'>
                            <div className='book-content'>
                                <h3>Dedicated To Bring The World Powerful Robotic Solutions Book A Consultation</h3>

                                <button className='common-button border'>
                                    Book Consultation <FontAwesomeIcon icon={faAngleDoubleRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row d-block d-lg-none'>
                    <div className='col-12'>
                        <img src={bookimg} alt="" />
                    </div>
                    <div className='col-12'>
                        <div className='book-content'>
                            <h3>Dedicated To Bring The World Powerful Robotic Solutions Book A Consultation</h3>
                            <button className='common-button border'>
                                Book Consultation <FontAwesomeIcon icon={faAngleDoubleRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;