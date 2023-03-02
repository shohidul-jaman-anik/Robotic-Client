import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navebar from './Components/Pages/Navebar/Navebar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Pages/Footer/Footer';
import Order from './Components/Pages/Order/Order';
import Login from './Components/Pages/Login/SignIn/Login';
import SignUp from './Components/Pages/Login/SignUp/SignUp';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MyOrder from './Components/Pages/Dashboard/MyOrder';
import Review from './Components/Pages/Dashboard/Review';
import AddProduct from './Components/Pages/Dashboard/AddProduct';
import MannageProduct from './Components/Pages/Dashboard/MannageProduct';
import MakeAdmin from './Components/Pages/Dashboard/MakeAdmin';
import Paymens from './Components/Pages/Dashboard/Paymens';
import AllOrder from './Components/Pages/Dashboard/AllOrder';
import RequireAuth from './Components/Pages/RequireAuth/RequireAuth';
import RequireUser from './Components/Pages/RequireUsesr/RequireUser';
import MyProfile from './Components/Pages/Dashboard/MyProfile';
import NotFound from './Components/Pages/NotFound/NotFound';
import Blog from './Components/Pages/Blog/Blog';
import Welcome from './Components/Pages/Dashboard/Welcome';
import Contact from './Components/Pages/Contact/Contact';


function App() {
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order/:Id" element={<RequireAuth><Order /></RequireAuth>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
          <Route index element={<Welcome />} ></Route>
          
          <Route path="profile" element={<MyProfile />}></Route>
          <Route path="payment/:id" element={<Paymens />}></Route>
          
          <Route path="addproduct" element={<RequireUser><AddProduct /></RequireUser>}></Route>
          <Route path="mannageproduct" element={<RequireUser><MannageProduct /></RequireUser>}></Route>
          <Route path="user" element={<RequireUser><MakeAdmin /></RequireUser>}></Route>
          <Route path="allorder" element={<RequireUser><AllOrder /></RequireUser>}></Route>
        </Route >

        <Route path="order" element={<MyOrder />}></Route>
        <Route path="review" element={<Review />}></Route>
        <Route path="contact" element={<Contact />}></Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
