import React from 'react';

import './Review.css'

const Review = ({ review }) => {
    return (
        <div className=''>
            <div className='style'>
                <p>{review?.description}</p>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <img className='img-fluid review-style pe-1' src={review?.picture} alt="" />
                <div className='rating'>
                    <p className='name'>{review?.Username}</p>
                    <p>Rating:<span style={{ color: '#F7C000', fontWeight: "bold", fontSize: "18px" }}>{review?.rating}/5</span></p>
                </div>
            </div>
        </div>
    );
};

export default Review;