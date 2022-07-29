import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import './Dashborad.css'


const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='container py-3'>
      {/* --------------------for mobile tablet-------------   */}
      <div className='d-block d-lg-none'>
        <div className='row align-items-start'>
          <div className='col-12 mt-3'>
            <Button variant="primary" onClick={handleShow}>
              Menu
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* <!-- Sidebar content here --> */}

                {/* {!admin &&
              <>
            <li><Link to="/dashboard/review">My Reviews</Link></li>
            <li><Link to="/dashboard/order">My Order</Link></li>
              </>
            } */}

                

                {admin && <>
                  <li><Link to="/dashboard"></Link></li>
                  <li><Link to="/dashboard/profile">My Profile</Link></li>
                  <li><Link to="/dashboard/user">All User</Link></li>  <li><Link to="/dashboard/addproduct ">AddProduct</Link></li> <li><Link to="/dashboard/mannageproduct">Manage Product</Link></li> <li><Link to="/dashboard/allorder">Manage Order</Link></li></>}
              </Offcanvas.Body>
            </Offcanvas>
          </div>

          <div className='col-12'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      {/* --------------------for desktop-------------   */}

      <div className='d-none d-lg-block'>
        <div className='row'>
          <div className='col-2'>
            <div className='h-100' style={{ borderRight: "1px solid rgb(232, 227, 227)" }}>
              {/* <!-- Sidebar content here --> */}

              {!admin &&
                <>

                  <li><Link to="/dashboard/order">My Order</Link></li>
                  <li><Link to="/dashboard/review">My Reviews</Link></li>
                </>
              }
              <li><Link to="/dashboard"></Link></li>
              <li><Link to="/dashboard/profile">My Profile</Link></li>

              {admin && <><li><Link to="/dashboard/user">MakeAdmin</Link></li>  <li><Link to="/dashboard/addproduct ">AddProduct</Link></li> <li><Link to="/dashboard/mannageproduct">ManageProduct</Link></li> <li><Link to="/dashboard/allorder">Manage Order</Link></li></>}
            </div>
          </div>
          <div className='col-10'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Dashboard;