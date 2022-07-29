import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    //use react query
    const { data: users, isLoading, refetch } = useQuery(['available'], () => fetch(`http://localhost:5000/user`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">Admin</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => <AdminRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></AdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;