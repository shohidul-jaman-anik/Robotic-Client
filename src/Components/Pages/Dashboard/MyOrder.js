import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import OrderRow from './OrderRow';

const MyOrder = () => {
  const [user] = useAuthState(auth)
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?userEmail=${user.email}`, {
        method: "GET",
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
      })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
          }
          return res.json()
        })
        .then(data => {
          setOrder(data)
        })
    }
  }, [user, order])


  return (
    <div className=''>
      <h2 className='text-center'>{user?.displayName}</h2>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantiy</th>
              <th scope="col">Payment</th>
              <th scope="col">Cancel</th>
            </tr>
          </thead>
          <tbody>

            {
              order?.map((orders,) => <OrderRow
                key={orders._id}
                orders={orders}
              ></OrderRow>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;