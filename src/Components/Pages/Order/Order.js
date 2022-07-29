import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import ReactImageMagnify from 'react-image-magnify';
import './Order.css'



const Order = () => {
    const { Id } = useParams();
    //use react query
    const { data: product, isLoading, refetch } = useQuery(('product'), () => fetch(`http://localhost:5000/productid/${Id}`)
        .then(res => res.json()));
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [quantiti, setQuantity] = useState('');


    let price = quantiti * product?.price;
    const handleName = (event) => {
        setName(event.target.value)
    };
    const handlPhone = (event) => {
        setPhone(event.target.value)
    };
    const handleAddress = (event) => {
        setAddress(event.target.value)
    };
    const HandleQuantity = (event) => {
        setQuantity(event.target.value)
    }
    const handleQuantity = () => {

        if (quantiti < product.minimumOrder) {
            toast.error(`Minumun Quantity Mustbe ${product.minimumOrder}`)

        }
        else if (quantiti > product.quantity) {
            toast.error(`Quantity can not be grater than ${product.quantity}`);

        }
    }
    //----------hadle-form----------------
    const loginHandle = event => {
        event.preventDefault();

        const info = { email, name, phone, address, quantiti, price };

        //----------for backed order information------------- 
        const order = {
            orderID: Id,
            userEmail: user.email,
            userName: user.displayName,
            productName: product.name,
            phone,
            address,
            quantiti,
            price
        }
        console.log(order)
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast(`Your order is complete`)
                }
                refetch()
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='container'>
                <div className='border border-secondary my-5 p-3 '>
                    <div className='productContainer'>

                        <div className='productImg'>
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Robotic Products',
                                    isFluidWidth: true,
                                    src: product.picture
                                },
                                largeImage: {
                                    src: product.picture,
                                    width: 1000,
                                    height: 1400
                                }
                            }} />
                        </div>

                        <div className="">
                            <div className='card-body'>
                                <h3>{product.name}</h3>

                                <p className='pt-2 '>{product.description}</p>

                                <h6>Price : ${product.price}</h6>
                                <h6>Quantity : {product.quantity}</h6>
                                <h6 >MinimumOrder: {product.minimumOrder}</h6>
                            </div>
                        </div>
                    </div>


                    {/*---------- From part---------- */}

                    <div className='border p-2 w-50 mx-auto'>
                        <Form onSubmit={loginHandle}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onChange={handleName} type="name" readOnly placeholder="Name" value={user?.displayName} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="Email" readOnly placeholder="Email" value={user?.email} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control value={product.name} readOnly type="text" placeholder="product name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control onChange={handlPhone} type="number" placeholder="Phone Number" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Address</Form.Label>
                                <Form.Control onChange={handleAddress} type="text" placeholder="Address" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control onChange={HandleQuantity} min={product.minimumOrder} max={product.quantity} type="number" placeholder="Quantity" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder="price" readOnly value={price} required />
                            </Form.Group>
                            <Button onClick={handleQuantity} className='w-75 mx-auto d-block mb-2 common-button' type="submit">
                                Add To Cart
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;