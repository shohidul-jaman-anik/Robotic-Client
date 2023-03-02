import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import GetProduct from './GetProduct/GetProduct';
import './Product.css';

const Product = () => {
    //use react query
    const { data: products, isLoading } = useQuery(('products'), () => fetch(`https://robotic-server.onrender.com/
product`)
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div style={{ backgroundColor: "#F6F6F6" }}>
            <div className='container py-5'>
                <h2 className='product-title'>Pro<span style={{ color: '#FA5F0B' }}>duct</span></h2>
                <div className='row g-4'>
                    {
                        products?.slice(-6).map(product => <GetProduct
                            product={product}
                            key={product._id}>
                        </GetProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;