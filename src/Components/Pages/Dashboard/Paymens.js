import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3fcoEWKrisGJtYob8a6cDmb8cQDJiHQja8FYNhPE5Q6xzS9z2pQsXrSBkS7VHmeDkwxOwXHV3LSypVWBiypVRL00Dv21O1PU');

const Paymens = () => {
    const { id } = useParams();
    const url = `https://robotic-server.onrender.com/
orderId/${id}`;
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