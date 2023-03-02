import React from 'react';
import { ImBin } from "react-icons/im";
import Swal from 'sweetalert2';

const AllOrderRow = ({ order, refetch }) => {
  const { price, paid, _id, productName, quantiti } = order;

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
            refetch()
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
        {(price && !paid) && <div>
          <button className='btn btn-primary'>unpaid</button>
        </div>}
        {
          (price && paid) && <div>
            <button className='btn btn-primary'>paid</button>
          </div>}
      </td>
      <td>
        {(price && !paid) && <button onClick={() => handleDelete(_id)} className='btn btn-danger'><ImBin /></button>}
        {(price && paid) && <button disabled onClick={() => handleDelete(_id)} className='btn btn-danger'><ImBin /></button>}
      </td>
    </tr>
  );
};

export default AllOrderRow;