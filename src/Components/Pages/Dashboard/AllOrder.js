import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import AllOrderRow from './AllOrderRow';

const AllOrder = () => {
    //use react query
    const { data: orders, isLoading, refetch } = useQuery(('orders'), () => fetch(`https://robotic-manufacture.herokuapp.com/orders`)
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
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantiy</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Cancel</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders?.map((order,) => <AllOrderRow
                                key={order._id}
                                order={order}
                                refetch={refetch}
                            ></AllOrderRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrder;