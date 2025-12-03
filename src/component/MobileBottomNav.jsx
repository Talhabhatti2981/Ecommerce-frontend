import { Link, useLocation } from "react-router-dom";
import { FaHome, FaThList, FaUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const MobileBottomNav = () => {
  const location = useLocation();
  const hideRoutes = ["/", "/login", "/signup"];

  if (hideRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-xl border-t border-gray-200 md:hidden z-50">
      <div className="flex justify-between px-6 py-3 text-center">

        <Link to="/home" className="flex flex-col items-center text-gray-700 hover:text-primary">
          <FaHome className="text-xl" />
          <span className="text-xs mt-1">Home</span>
        </Link>

        <Link to="/categories" className="flex flex-col items-center text-gray-700 hover:text-primary">
          <FaThList className="text-xl" />
          <span className="text-xs mt-1">Categories</span>
        </Link>

        <Link to="/cart" className="flex flex-col items-center text-gray-700 hover:text-primary relative">
          <IoCartOutline className="text-2xl" />
          <span className="absolute -top-1 -right-3 bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">2</span>
          <span className="text-xs mt-1">Cart</span>
        </Link>

        <Link to="/Account" className="flex flex-col items-center text-gray-700 hover:text-primary">
          <FaUser className="text-xl" />
          <span className="text-xs mt-1">Account</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomNav;
