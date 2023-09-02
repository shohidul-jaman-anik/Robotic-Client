import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ payments }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [carderror, setCarderror] = useState('');
  const [successerror, setSuccesserror] = useState('');
  const [spinner, setSpinner] = useState(false);
  const [transactionId, setTransactionId] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  const { price, userEmail, userName, _id } = payments

  useEffect(() => {
    fetch('https://robotic-server.onrender.com/create - payment - intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ price })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });

  }, [price])



  //submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    };
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });
    setCarderror(error?.message || '')
    setSuccesserror('');
    setSpinner(true)
    //----------------------confirm card apyment-----------------
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail,
          },
        },
      },
    );
    if (intentError) {
      setCarderror(intentError?.message)
      console.log(intentError);
      setSpinner(false)
    } else {
      setCarderror('');
      setTransactionId(paymentIntent.id)
      setSuccesserror('SuccessFully Payment');

      //store payment 
      const payment = {
        order: _id,
        transactionID: paymentIntent.id,
      }
      fetch(`https://robotic-server.onrender.com/
orderId/${_id}`, {
        method: "PATCH",
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ payment })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setSpinner(false)
        })

    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-primary mt-6' type="submit" disabled={!stripe || !clientSecret || successerror}>
          Pay
        </button>
      </form>
      {
        carderror && <p className='text-red-500'>{carderror}</p>
      }
      {
        successerror && <div className=''>
          <p>{successerror}  </p>
          <p>Your transaction Id: <span className="font-bold">{transactionId}</span> </p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;