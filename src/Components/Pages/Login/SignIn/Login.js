import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import useTooken from '../../../hooks/useTooken';

const Login = () => {
  //login
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  //for from
  const navigate = useNavigate()
  const { register, formState: { errors }, handleSubmit } = useForm();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  // Submit your data into Redux store
  const onSubmit = data => {
    console.log(data)
    signInWithEmailAndPassword(data.email, data.password);
  };
  const [token] = useTooken(user)


  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate])


  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div className='container'>
      <div className='mx-auto form-container px-3'>
        <div className='d-flex align-items-center justify-content-center'>
          <div style={{ height: "1px", backgroundColor: "black" }} className=' w-25'></div>
          <h3 className='mx-2 mt-2'>Login</h3>
          <div style={{ height: "1px", backgroundColor: "black" }} className='w-25'></div>
        </div>
        {/* --------------form part-----------     */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"{...register("email", {
              required: {
                value: true,
                message: 'Please Give Email'
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Privide  a Valid Email'
              }
            })} />
            <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-danger">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' && <span className="label-text-alt text-danger">{errors.email.message}</span>}
            </label>
          </div>
          {/* ----------------password--------------- */}
          <div className="">
            <label for="inputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password"{...register("password", {
              required: {
                value: true,
                message: 'Please Give password'
              },
              minLength: {
                value: 6,
                message: 'Must be 6 Characters or longer'
              }
            })} />
            <label className="label">
              {errors.password?.type === 'required' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
              {errors.password?.type === 'minLength' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
            </label>
          </div>

          {
            error?.message && <p className='text-danger'>{error.message}</p>
          }

          <input className='common-button mb-3' type="submit" vale="Login" />
        </form>

        <p>New to here? <Link to="/signup" className="text-danger pe-auto text-decoration-none">Please SignUp</Link></p>

        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;