import React from 'react';
import { ImBin } from "react-icons/im";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ProductsRow = ({ product, refetch }) => {
    const { picture, name, price, _id } = product;
    const handleDelete = (Id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://robotic-server.onrender.com/
addProduct/${Id}`, {
                    method: "Delete",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch()
                        }
                        else {
                            toast.error(`Product ${name} Not Deleteed`)
                        }
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
            <td><img style={{ width: "90px", height: "90px", borderRadius: "50px", border: "1px solid #CDCCCC" }} className='img-fluid' src={picture} alt="" /></td>
            <td>{name}</td>
            <td>{price}</td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-danger"><ImBin /></button></td>
        </tr>
    );;
};

export default ProductsRow;