import React from 'react';
import { useQuery } from 'react-query';
import GetProduct from '../Home/Product/GetProduct/GetProduct';
import Loading from '../Loading/Loading';
import ProductsRow from './ProductsRow';

const MannageProduct = () => {

    //use react query
    const { data: products, isLoading, refetch } = useQuery(('products'), () => fetch(`http://localhost:5000/product`)
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=' py-5'>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Pcture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((Product,) => <ProductsRow
                                key={Product._id}
                                product={Product}
                                refetch={refetch}
                            ></ProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MannageProduct;