import React from 'react';
import { toast } from 'react-toastify';
import { ImBin } from "react-icons/im";
import Swal from 'sweetalert2';
const AdminRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://robotic-manufacture.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Make an admin');
                    refetch();
                }
            })
    }
    //--------------delete---------
    const handleDelete = (email) => {
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
                fetch(`https://robotic-manufacture.herokuapp.com/removeuser/${email}`, {
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
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-primary">Make Admin</button>}</td>
            <td><button onClick={() => handleDelete(email)} className="btn btn-danger"><ImBin /></button></td>
        </tr>
    );
};

export default AdminRow;