import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./component/home";
import Hero from "./component/Hero-Section";
import Category from "./component/Category";
import Month from "./component/month";
import Music from "./component/Music";
import Product from "./component/Product";
import Arrival from "./component/Arrival";
import Delivery from "./component/Delivery";
import Footer from "./component/Footer";

import SignUp from "./component/signup/SignUp";
import Login from "./component/login/Login";
import Contact from "./component/Contact/Contact";
import AboutUs from "./component/About/AboutUs";
import Wishlist from "./component/Wishlist/Wishlist";
import Cart from "./component/Cart/cart";
import Acount from "./component/Account/Acount";
import Products from "./component/ProductList/Products";
import Billing from "./component/Billing/Billing";
import SearchResults from "./component/SearchResults";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Signup Page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Home Page */}
        <Route
          path="/home"
          element={
            <>
              <Home />
              <Hero />
              <Category />
              <Month />
              <Music />
              <Product />
              <Arrival />
              <Delivery />
              <Footer />
            </>
          }
        />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* About Page */}
        <Route path="/about" element={<AboutUs />} />

        {/* Wishlist Page */}
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />

        {/* Account Page */}
        <Route path="/Account" element={<Acount />} />

        {/* Products Page */}
        <Route path="/Products" element={<Products />} />

        {/* Billing Page */}
        <Route path="/Billing" element={<Billing />} />

        {/* Search Results Page */}
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
