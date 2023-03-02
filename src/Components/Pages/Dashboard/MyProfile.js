import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/profile/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/login')
                } else if (res.status === 401) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/login')
                }
                return res.json();
            })
            .then(data => {
                setUserInfo(data)
            })
    }, [user, userInfo]);

    // // -----------form------------
    //for from
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        const user = {
            email: data.email,
            education: data.education,
            location: data.location,
            phone: data.phone,
            linkdin: data.linkdin
        }

        console.log(user)
        fetch('http://localhost:5000/updateuser', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                toast('Profile update')

            })
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='my-4 '>
                <h1>My Profile</h1>
                <p style={{ border: "1px solid black", width: "30px", height: '30px', textAlign: "center", borderRadius: "50%" }}>{user?.displayName.slice(0, 1)}</p>
                <p>Name:{user?.displayName}</p>
                <p>Email:{user?.email}</p>
                {
                    userInfo?.education ? <p>Education:{userInfo.education}</p> : ""
                }
                {
                    userInfo?.location ? <p>Location:{userInfo.location}</p> : ""
                }
                {
                    userInfo?.phone ? <p>Phone:{userInfo.phone}</p> : ""
                }
                {
                    userInfo?.linkdin ? <p style={{ color: "blue" }}>Linkdin:{userInfo.linkdin}</p> : ""
                }
            </div>

            <div className='mx-auto px-3 mt-5'>
                <h2>Update your Profile</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* ----------------Name--------------- */}
                    <div className="">
                        <label for="inputName" className="form-label">Name</label>
                        <input type="text" value={user?.displayName} readOnly className="form-control" id="inputName" placeholder="name"{...register("name", {
                        })} />
                    </div>
                    {/* ----------------Email-------------- */}
                    <div className="">
                        <label for="inputName" className="form-label">Name</label>
                        <input type="text" value={user?.email} readOnly className="form-control" id="inputName" placeholder="name"{...register("email", {
                        })} />
                    </div>

                    {/* ----------------Education-------------- */}
                    <div className="">
                        <label for="inputName" className="form-label">education</label>
                        <input type="text" className="form-control" id="inputName" placeholder="education"{...register("education", {
                            required: {
                                value: true,
                                message: 'Please give education'
                            },
                        })} />
                        <label className="label">
                            {errors.education?.type === 'required' && <span className="label-text-alt text-danger">{errors.education.message}</span>}
                        </label>
                    </div>


                    {/* ----------------location--------------- */}
                    <div className="">
                        <label for="inputName" className="form-label">location</label>
                        <input type="text" className="form-control" id="inputName" placeholder="location"{...register("location", {
                            required: {
                                value: true,
                                message: 'Please give location'
                            },
                        })} />
                        <label className="label">
                            {errors.location?.type === 'required' && <span className="label-text-alt text-danger">{errors.location.message}</span>}
                        </label>
                    </div>


                    {/* ----------------phone--------------- */}
                    <div className="">
                        <label for="inputName" className="form-label">phone</label>
                        <input type="number" className="form-control" id="inputName" placeholder="phone"{...register("phone", {
                            required: {
                                value: true,
                                message: 'Please give phone'
                            },
                        })} />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-danger">{errors.phone.message}</span>}
                        </label>
                    </div>

                    {/* ----------------phone--------------- */}
                    <div className="">
                        <label for="inputName" className="form-label">linkdin</label>
                        <input type="text" className="form-control" id="inputName" placeholder="linkdin"{...register("linkdin", {
                            required: {
                                value: true,
                                message: 'Please give Linkdin URL'
                            },
                        })} />
                        <label className="label">
                            {errors.linkdin?.type === 'required' && <span className="label-text-alt text-danger">{errors.linkdin.message}</span>}
                        </label>
                    </div>


                    <input className=' common-button mb-3' type="submit" value="Add" />
                </form>

            </div>


        </div>
    );
};

export default MyProfile;