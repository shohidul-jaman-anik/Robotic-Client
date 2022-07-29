import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51L0e23Ca3QHIfeD9jH9tTOIpdBREDgbEafTED1OLblZAHjycTdBoJpDiCMFPW0d9SMjGPbuj0JFCFFzM6T8zJc5N000zlfIap7');

const Paymens = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orderId/${id}`;
    const { data: payments, isLoading } = useQuery(['payments', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res => res.json())

    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <div className='row'>
                <div className='col-6 shadow p-3 mb-5 bg-body rounded mx-auto d-block '>
                    <div className='text-center'>
                        <p className=" font-bold">Hello, {payments.userName}</p>
                        <p className="font-bold">Please pay for {payments.productName}</p>
                        <p className="font-bold">Please pay${payments.price}</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6 shadow p-3 mb-5 bg-body rounded mx-auto d-block '>
                    <div className='text-center'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm payments={payments} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Paymens;