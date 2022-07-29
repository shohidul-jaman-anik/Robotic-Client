import React from 'react';
import './GetProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const GetProduct = ({ product }) => {
    const { picture, name, minimumOrder, price, quantity, description, _id } = product;
    const navigate = useNavigate();
    const order = () => {
        navigate(`order/${_id}`)
    }
    return (
        <div className='card-group col-lg-4 col-md-6 col-sm-12'>
            <div className='getProduct border px-3'>
                <div className='getProduct-image'>
                    <img className='img-fluid' src={picture} alt="" />
                </div>
                <h3 className='mt-2'>{name}</h3>
                <div className='prices my-4'>
                    <p><span className='prices-descripe'>MinimumOrder:</span>{minimumOrder}</p>
                    <p><span className='prices-descripe'>Price:</span>${price}</p>
                    <p><span className='prices-descripe'>Quantity:</span>{quantity}</p>
                </div>
                <p className=' pb-3 description'>{description?.slice(0, 130)}.....</p>
                <div className='text-center'>
                    <button onClick={order} className='common-button'>
                        Explore More <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GetProduct;