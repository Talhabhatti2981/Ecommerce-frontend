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
import ProtectedRoute from './component/common/ProtectedRoute';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from './component/supabaseClient';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setAuthenticated(!!session);
      } catch (error) {
        console.error("Auth check error:", error);
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthenticated(!!session);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Show loading screen while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

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

      {/* Navbar visible on all pages except /Account and auth pages */}
      {location.pathname !== '/Account' && 
       location.pathname !== '/login' && 
       location.pathname !== '/signup' && (
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      )}

      {/* Main content padding to avoid Navbar overlap */}
      <div className={location.pathname !== '/Account' && 
                      location.pathname !== '/login' && 
                      location.pathname !== '/signup' ? "pt-20" : ""}>
        <Routes>
          {/* Root path - redirect to login if not authenticated, home if authenticated */}
          <Route path="/" element={
            authenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          } />

          {/* Auth pages - redirect to home if already authenticated */}
          <Route path="/login" element={
            authenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <Login />
            )
          } />
          <Route path="/signup" element={
            authenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <SignUp />
            )
          } />

          {/* Protected routes - require authentication */}
          <Route path="/home" element={
            <ProtectedRoute>
              <>
                <Hero />
                <Category />
                <Month />
                <Product searchQuery={searchQuery} />
                <Delivery />
                <Footer />
              </>
            </ProtectedRoute>
          } />

          {/* Search route for Hero category clicks */}
          <Route path="/search" element={
            <ProtectedRoute>
              <Product searchQuery={searchQuery} />
            </ProtectedRoute>
          } />

          {/* Other protected pages */}
          <Route path="/about" element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          } /> 
          <Route path="/contact" element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          } /> 
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path="/Billing" element={
            <ProtectedRoute>
              <Billing />
            </ProtectedRoute>
          } />
          <Route path="/Account" element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
          <Route path="/Wishlist" element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          } />
          <Route path="/ScrollToTopButton" element={
            <ProtectedRoute>
              <ScrollToTopButton />
            </ProtectedRoute>
          } />
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
