import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const imgStorageKEY = 'd6529dc3e2b5077433b72e6ff3596019';
    //for from
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // Submit your data into Redux store
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKEY}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const picture = result.data.url;
                    const product = {
                        Username: user?.displayName,
                        email: user?.email,
                        name: data.productName,
                        picture: picture,
                        price: data.productPrice,
                        minimumOrder: data.minimumQunatity,
                        quantity: data.producQuantity,
                        description: data.productDesciption,

                    }

                    //send to your database
                    fetch('https://robotic-server.onrender.com/addProduct', {
                        method: "POST",
                        headers: {
                            'content-type': "application/json",
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(output => {
                            if (output.insertedId) {
                                reset()
                                toast('Product added successfully');
                            } else {
                                toast.error('Product added unsuccessfully')
                            }
                        })
                }
            })
    };

    return (
        <div>
            <div className='mx-auto px-3'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* ----------------Name--------------- */}
                    <div className="">
                        <label for="inputName" className="form-label">Name</label>
                        <input type="text" value={user?.displayName} readOnly className="form-control" id="inputName" placeholder="name"{...register("name", {
                        })} />
                    </div>
                    {/* ----------------Email--------------- */}
                    <div className="">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" value={user?.email} readOnly className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"{...register("email", {

                        })} />
                    </div>
                    {/* ----------------Product Name--------------- */}
                    <div className="">
                        <label for="inputName" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Product Name"{...register("productName", {
                            required: {
                                value: true,
                                message: 'Please give Product Name'
                            },
                        })} />
                        <label className="label">
                            {errors.productName?.type === 'required' && <span className="label-text-alt text-danger">{errors.productName.message}</span>}
                        </label>
                    </div>
                    {/* ----------image fild-----------*/}
                    <div className="">
                        <label for="inputName" className="form-label">Product Image</label>
                        <input type="file" className="form-control" id="inputName" placeholder="Product Image"{...register("image", {
                            required: {
                                value: true,
                                message: 'Please Give Picture file'
                            },
                        })} />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-danger">{errors.image.message}</span>}
                        </label>
                    </div>
                    {/* ----------------Product Price--------------- */}
                    <div className="">
                        <label for="inputName" className="form-label">Product Price</label>
                        <input type="number" className="form-control" id="inputName" placeholder="Product Price"{...register("productPrice", {
                            required: {
                                value: true,
                                message: 'Please give Product Price'
                            },
                        })} />
                        <label className="label">
                            {errors.productPrice?.type === 'required' && <span className="label-text-alt text-danger">{errors.productPrice.message}</span>}
                        </label>
                    </div>

                    {/* ----------------Product Minumum Quantity--------------- */}
                    <div className="">
                        <label for="inputName" className="form-label">Minimum Qunatity</label>
                        <input type="number" className="form-control" id="inputName" placeholder="Minimum Qunatity"{...register("minimumQunatity", {
                            required: {
                                value: true,
                                message: 'Please give minimumQunatity'
                            },
                        })} />
                        <label className="label">
                            {errors.minimumQunatity?.type === 'required' && <span className="label-text-alt text-danger">{errors.minimumQunatity.message}</span>}
                        </label>
                    </div>

                    {/* ----------------Product Quantity--------------- */}
                    <div className="">
                        <label for="inputName" className="form-label">Product Quantity</label>
                        <input type="number" className="form-control" id="inputName" placeholder="Quantity"{...register("producQuantity", {
                            required: {
                                value: true,
                                message: 'Please give Product Quantity'
                            },
                        })} />
                        <label className="label">
                            {errors.producQuantity?.type === 'required' && <span className="label-text-alt text-danger">{errors.producQuantity.message}</span>}
                        </label>
                    </div>
                    {/* ----------------Product Description-------------- */}
                    <div className="">
                        <label for="floatingTextarea2">Product Desciption</label>
                        <textarea className="form-control" placeholder="Leave a description here" id="floatingTextarea2" style={{ height: "100px" }}{...register("productDesciption", {
                            required: {
                                value: true,
                                message: 'Please give Product productDesciption'
                            },
                        })}></textarea>
                        <label className="label">
                            {errors.productDesciption?.type === 'required' && <span className="label-text-alt text-danger">{errors.productDesciption.message}</span>}
                        </label>
                    </div>
                    <input className=' common-button mb-3' type="submit" value="Add" />
                </form>

            </div>
        </div>
    );
};

export default AddProduct;