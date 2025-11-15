import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { supabase } from "../component/supabaseClient";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <nav>
      <div className="bg-black flex flex-col sm:flex-row justify-center items-center sm:justify-center px-4">
        <h2 className="text-white text-center p-3 text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h2>
        <button className="text-white underline text-sm mb-2 sm:mb-0 cursor-pointer">
          Shop Now
        </button>

        <select className="bg-black text-white px-2 py-1 rounded text-sm w-32 focus:outline-none">
          <option className="bg-black text-white">English</option>
          <option className="bg-black text-white">اردو</option>
          <option className="bg-black text-white">हिन्दी</option>
          <option className="bg-black text-white">العربية</option>
          <option className="bg-black text-white">Français</option>
          <option className="bg-black text-white">Español</option>
          <option className="bg-black text-white">Deutsch</option>
          <option className="bg-black text-white">中文</option>
          <option className="bg-black text-white">日本語</option>
        </select>
      </div>

      {/* Main Navbar */}
      <div className="flex flex-wrap items-center justify-around p-4 shadow-md">
        <h1 className="text-black font-bold text-2xl sm:text-3xl">Exclusive</h1>

        <button
          className="text-black sm:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full sm:flex sm:w-auto gap-4 sm:gap-12 text-center mt-4 sm:mt-0`}
        >
          <li>
            <Link to="/home" className="underline font-semibold block py-1">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block py-1">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="block py-1">
              About Us
            </Link>
          </li>
         
        </ul>

        {/* Search + Heart + Cart */}
        <div className="flex items-center gap-4 mt-4 sm:mt-0 w-full sm:w-auto sm:flex-nowrap flex-wrap justify-center sm:justify-end">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-[#F6F6F6] pr-10 pl-4 py-2 w-full rounded focus:outline-none"
            />
            <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
          </div>

          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <Link to="/wishlist">
              <FaRegHeart className="h-5 w-5 cursor-pointer" />
            </Link>
            <IoCartOutline className="h-6 w-6 cursor-pointer" />
          </div>
           <li>
            <button
              onClick={handleLogout}
              className="block cursor-pointer py-1 text-red-600 font-bold"
            >
              Logout
            </button>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Home;
