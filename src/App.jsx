import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero-Section';
import Category from './component/Category';
import Month from './component/month';
import Product from './component/ProductList/Products';
import Delivery from './component/Delivery';
import Footer from './component/Footer';
import SignUp from './component/signup/SignUp';
import Login from './component/login/Login';
import AboutUs from './component/About/AboutUs'; 
import Cart from './component/Cart/cart';
import Contact from './component/Contact/Contact';
import Billing from './component/Billing/Billing';
import Account from './component/Account/Acount';
import Wishlist from './component/Wishlist/Wishlist';
import ScrollToTopButton from "./component/Arrow";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { useState } from 'react';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  return (
    <>
      {/* Global Theme */}
      <style>{`
        :root{
          --primary: #16A34A;
          --primary-dark: #15803d;
        }
        .bg-primary{ background-color: var(--primary) !important; }
        .hover\\:bg-primary-dark:hover{ background-color: var(--primary-dark) !important; }
        .text-primary{ color: var(--primary) !important; }
        .border-primary{ border-color: var(--primary) !important; }
        .btn-primary{ background-color:var(--primary); color:#fff; }
        .btn-primary:hover{ background-color:var(--primary-dark); }
      `}</style>

      {/* Navbar visible on all pages except /Account */}
      {location.pathname !== '/Account' && (
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      )}

      {/* Main content padding to avoid Navbar overlap */}
      <div className="pt-20">
        <Routes>
          {/* Home / Landing page */}
          <Route path="/" element={
            <>
              <Hero />
              <Category />
              <Month />
              <Product searchQuery={searchQuery} />
              <Delivery />
              <Footer />
            </>
          } />

          {/* Explicit Home route */}
          <Route path="/home" element={
            <>
              <Hero />
              <Category />
              <Month />
              <Product searchQuery={searchQuery} />
              <Delivery />
              <Footer />
            </>
          } />

          {/* Search route for Hero category clicks */}
          <Route path="/search" element={<Product searchQuery={searchQuery} />} />

          {/* Other pages */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/Billing" element={<Billing />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/ScrollToTopButton" element={<ScrollToTopButton />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
