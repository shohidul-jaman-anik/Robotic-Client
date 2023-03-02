import React from 'react';
import { ImBin } from "react-icons/im";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const OrderRow = ({ orders }) => {
  const { price, paid, _id, productName, quantiti } = orders;
  //--------------delete---------
  const handleDelete = (Id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((results) => {
      if (results.isConfirmed) {
        fetch(`http://localhost:5000/removeOrder/${Id}`, {
          method: "Delete",
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
          .then(res => res.json())
          .then(data => {

          })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    });

  }
  return (
    <tr>
      <td>{productName}</td>
      <td>{price}</td>
      <td>{quantiti}</td>
      <td>
        {(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-primary'>Pay</button></Link>}

        {(price && paid) && <div>
          <button disabled className='btn btn-primary'>Paid</button>
        </div>}
      </td>
      <td>
        {(price && !paid) && <button onClick={() => handleDelete(_id)} className='btn btn-danger'><ImBin /></button>}
        {(price && paid) && <button disabled onClick={() => handleDelete(_id)} className='btn btn-danger'><ImBin /></button>}
      </td>
    </tr>
  );
};

export default OrderRow;