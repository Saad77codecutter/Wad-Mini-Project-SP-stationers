import './App.css';
import Navbar from './comp/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './comp/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './comp/Home';
import About from './comp/About';
import Electronic from './comp/Electronic';
import AdminLogin from './comp/AdminLogis';
import Filing from './comp/Filing';
import Stationery from './comp/Stationery';
import CartDetails from './comp/CartDetails';
import Branches from './comp/Branches';
import BackToTop from "react-back-to-top-button";
import { SlArrowUp } from 'react-icons/sl';
import ScrollButton from './comp/ScrollButton';
import { Fragment } from 'react';
import Dashboard from './comp/dashboard'; // ✅ this is the full dashboard page with sidebar
import DashboardHome from './comp/DashboardHome';
import Users from './comp/Users';
import Products from './comp/Products';
import Orders from './comp/orders';
import CustLogin from './comp/CustLogin';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/login' element={<AdminLogin />} />
            <Route exact path='/cls' element={<CustLogin />} />
            <Route exact path='/filing' element={<Filing />} />
            <Route exact path='/stationery' element={<Stationery />} />
            <Route exact path='/dashboard' element={<Dashboard />} /> {/* ✅ updated */}
 
          
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route index element={<DashboardHome />} /> {/* /dashboard */}
                  <Route path="products" element={<Products />} /> {/* /dashboard/products */}
                  <Route path="orders" element={<Orders />} />
                  <Route path="users" element={<Users />} />
                </Route>

            <Route exact path='/cart' element={<CartDetails />} />
            <Route exact path='/branches' element={<Branches />} />
          </Routes>
        </BrowserRouter>
      </Provider>

      <Footer />

      <Fragment>
        <ScrollButton />
      </Fragment>
    </>
  );
}

export default App;
