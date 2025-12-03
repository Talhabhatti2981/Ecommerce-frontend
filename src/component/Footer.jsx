import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuSendHorizontal } from "react-icons/lu";
import ScrollToTopButton from "./Arrow";
import { Link } from "react-router-dom";

// Import images
import playstore from "../assets/img/playstore.png";

const Footer = () => {
  return (
    <>
    <ScrollToTopButton/>
    <footer className="bg-black mt-40 text-white">
      <div className="container mt- mx-auto flex flex-wrap justify-between p-10 gap-y-10">
        <div className="w-full  md:w-64">
          <h2 className="text-2xl font-bold mt-10 ">Martiva</h2>
          <Link to="/">
            <p className="text-lg mt-4 mb-2">Subscribe</p>
          </Link>
          <p className="text-md mt-6 mb-4">Get 10% off your first order</p>
          <div className="relative  lg:w-52 sm:w-0 mt-3  mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 pr-8 rounded-sm text-white border border-white w-full bg-transparent"
            />
            <LuSendHorizontal className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white cursor-pointer" />
          </div>
        </div>

        <div className="w-full md:w-auto mt-10">
          <h2 className="text-lg font-bold">Support</h2>
          <p className="text-md pt-6">
            ------------------, <br /> -------, Pakistan.
          </p>
          <Link to="/">
            <p className="text-md pt-4">martiva@gmail.com</p>
          </Link>
          <Link to="/">
            <p className="text-md pt-5">000000000000000</p>
          </Link>
        </div>
 
        <div className="w-full md:w-auto mt-10">
          <h2 className="text-lg font-bold">Account</h2>
          <ul className="text-sm space-y-7 pt-7">
            <Link to="/Account">
              <li>My Account</li>
            </Link>
            <Link to="/login">
              <li className="pt-7">Login / Register</li>
            </Link>
            <Link to="/cart">
              <li className="pt-7">Cart</li>
            </Link>
            <Link to="/wishlist">
              <li className="pt-7">Wishlist</li>
            </Link>
            <Link to="/home">
              <li className="pt-7">Shop</li>
            </Link>
          </ul>
        </div>

        <div className="w-full md:w-auto mt-10">
          <h2 className="text-lg font-bold">Quick Link</h2>
          <ul className="text-sm space-y-7 mt-8">
            <Link to="/">
              <li>Privacy Policy</li>
            </Link>
            <Link to="/">
              <li className="pt-7">Terms Of Use</li>
            </Link>
            <Link to="/">
              <li className="pt-7">FAQ</li>
            </Link>
            <Link to="/contact">
              <li className="pt-7">Contact</li>
            </Link>
          </ul>
        </div>

        <div className="w-full md:w-auto mt-10">
          <h2 className="text-lg font-bold">Download App</h2>
          <p className="text-[#7D7D7D] pt-8">Save Rs. 840 with App New User Only</p>
          <div className="flex gap-3">
            {/* <img src={qrCode} alt="QR Code" className="pt-2 max-w-full mx-auto md:mx-0" /> */}
            <div>
              <div className="border border-white h-[38px] mt-2 rounded-sm">
                <div className="flex items-center gap-2 bg-black text-white px-3 py-1 rounded w-fit">
                  <img
                    src={playstore}
                    alt="Play Store"
                    className="w-5 h-5 object-contain cursor-pointer"
                  />
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] tracking-wide">GET IT ON</span>
                    <span className="text-sm font-semibold -mt-0.5">Google Play</span>
                  </div>
                </div>
              </div>

              {/* <div className="border border-white h-[38px] mt-3 rounded-sm">
                <div className="flex items-center gap-2 bg-black text-white px-3 py-1 rounded w-fit">
                  <img
                    src={appleLogo}
                    alt="App Store"
                    className="w-5 h-5 object-contain cursor-pointer"
                  />
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] tracking-wide">Download on the</span>
                    <span className="text-sm font-semibold -mt-0.5">App Store</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="mt-5 flex gap-4 justify-center md:justify-start">
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <CiTwitter />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center pt-7 pb-4 text-sm text-[#e7e5e5]">
        Copyright © 2025, All Rights Reserved
      </div>
    </footer>
    </>
    
  );
};

export default Footer;
