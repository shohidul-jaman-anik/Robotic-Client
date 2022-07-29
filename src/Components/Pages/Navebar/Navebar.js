import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState} from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../image/navebar/logo.png'
import logo2 from '../../image/navebar/logo-three.png';
import { FaLinkedinIn,FaTwitter,FaFacebookF,FaPinterest, } from 'react-icons/fa';
import './Navebar.css'
import Loading from '../Loading/Loading';


const Navebar = () => {
    const [user, loading,]=useAuthState(auth);
    if(loading){
      return <Loading></Loading>
    }
    const signout = () => {
      signOut(auth);
    };
 
    return (
        <>
        <div className='top-navebar d-md-block d-none'>
         <div className=' container'>
              <div className='row align-items-center'>
                  <div className='col-lg-8 col-12'>
                      <div className='row align-items-center'>
                          <div className='col-lg-4 col-md-5'>
                              <p><FontAwesomeIcon icon={faGlobe} /> We work with global Industry</p>
                          </div>
                          <div className='col-lg-3 col-md-3'>
                             <p><FontAwesomeIcon icon={faEnvelope} /> hello @robtic.com</p> 
                          </div>
                          <div className='col-lg-5 col-md-4'>
                             <p><FontAwesomeIcon icon={faPhone} /> 882-658-506</p> 
                          </div>
                      </div>
                  </div>
                  <div className='col-lg-4 col-12'> 
                      <div className='row justify-content-lg-end justify-content-md-start'>
                         <div className='col-md-2'>
                         <p className='nav-icon'><FaFacebookF /></p>
                         </div>
                         <div className='col-md-2'>
                         <p className='nav-icon'><FaTwitter/></p>
                         </div>
                         <div className='col-md-2'>
                         <p className='nav-icon'><FaPinterest /></p>
                         </div>
                         <div className='col-md-2'>
                         <p className='nav-icon'><FaLinkedinIn /></p>
                         </div>
                      </div>
                  </div>
              </div>
         </div>   
         </div>   

         <Navbar collapseOnSelect expand="lg" sticky="top"className='bg'>
          <Container> 
            <Navbar.Brand as={Link} to="/">
            <img className='img-fluid d-none d-lg-block' src={logo} alt="" />
            <img className='img-fluid d-block d-lg-none d-md-block d-sm-block' src={logo2} alt="" />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="mx-auto">
             <Nav.Link as={Link} to="/">Home</Nav.Link>
               <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                {/* //jodi user thake */}
             {
               user && <>
               <Nav.Link as={Link} to="/dashboard">DashBoard</Nav.Link>
               </>
             }
            
             </Nav>
             
               <div className='d-flex login'>
             {
               user?
               <>
                 <Link onClick={signout} as={Link} to="" >Sign Out </Link>
               </>
               :
               <>
               <Link as={Link} to="/login">Login</Link>
               </>
             }
               <Link as={Link} to="/signup">SignUp</Link>
               </div>
           
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Navebar;