import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "./supabaseClient";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import MobileBottomNav from "./MobileBottomNav";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check current user
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
    setIsProfileOpen(false);
  };

  // Navbar is now shown on / and /home
  const hideNavbarRoutes = ["/Account", "/login", "/signup"];
  if (hideNavbarRoutes.includes(location.pathname)) return null;

  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 shadow-sm fixed w-full top-0 z-50">
        <div className="px-4 md:px-10 lg:px-20 py-4 flex items-center justify-between">
          <Link
            to="/home"
            className="text-2xl font-bold text-primary hover:text-primary-600 transition duration-300"
          >
            Martiva
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-6 mx-auto">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-gray-700 font-medium hover:text-primary relative group ${
                    location.pathname === link.path ? "text-primary" : ""
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right icons */}
          <div className="hidden md:flex items-center gap-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const q = e.target.search.value.trim();
                if (q) navigate(`/Products?search=${encodeURIComponent(q)}`);
              }}
              className="relative"
            >
              <input
                type="text"
                name="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-full px-4 py-2 pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-primary"
              >
                <FaSearch className="h-5 w-5" />
              </button>
            </form>

            <Link to="/cart" className="relative text-gray-700 hover:text-primary">
              <IoCartOutline className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </Link>

            {/* Profile dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="text-gray-700 hover:text-primary"
              >
                <FaUser className="h-6 w-6" />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-lg">
                  <Link
                    to="/Account"
                    onClick={() => setIsProfileOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-100 hover:text-primary"
                  >
                    <FaUser className="inline mr-2" /> My Account
                  </Link>
                  <Link
                    to="/admin"
                    onClick={() => setIsProfileOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-100 border-t hover:text-primary"
                  >
                    Admin Dashboard
                  </Link>
                  <Link
                    to="/seller"
                    onClick={() => setIsProfileOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-100 border-t hover:text-primary"
                  >
                    Seller Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-3 text-left hover:bg-gray-100 border-t hover:text-primary"
                  >
                    <FaSignOutAlt className="inline mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const q = e.target.search.value.trim();
                if (q) {
                  navigate(`/Products?search=${encodeURIComponent(q)}`);
                  setIsMenuOpen(false);
                }
              }}
              className="relative p-4"
            >
              <input
                type="text"
                name="search"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10"
              />
              <button
                type="submit"
                className="absolute right-7 top-1/2 -translate-y-1/2 text-gray-600"
              >
                <FaSearch />
              </button>
            </form>

            <ul className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block text-gray-700 text-lg hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="p-4 border-t flex flex-col gap-4 text-gray-700">
              <Link
                to="/cart"
                className="flex items-center gap-2 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                <IoCartOutline /> Cart
              </Link>
              <Link
                to="/Account"
                className="flex items-center gap-2 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUser /> Account
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </>
  );
};

export default Navbar;
