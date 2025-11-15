import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./component/home";
import Hero from "./component/Hero-Section";
import Flash from "./component/Flash-Sale";
import Category from "./component/Category";
import Month from "./component/month";
import Music from "./component/Music";
import Product from "./component/Product";
import Arrival from "./component/Arrival";
import Delivery from "./component/Delivery";
import Footer from "./component/Footer";

import SignUp from "./component/signup/SignUp";
import Login from "./component/login/Login";

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
              <Flash />
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
      </Routes>
    </Router>
  );
}

export default App;
