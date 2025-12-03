import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";
import api from "../../utils/api";

const Cart = () => {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [updatingItem, setUpdatingItem] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // 'success' or 'error'

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await api.cart.get();
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
      // If cart fetch fails (e.g., not authenticated), show empty cart
      setCart({ items: [], total: 0 });
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    try {
      setUpdatingItem(productId);
      if (newQuantity <= 0) {
        await api.cart.remove(productId);
        setToastMessage("Item removed from cart!");
      } else {
        await api.cart.update(productId, newQuantity);
        setToastMessage("Cart item quantity updated!");
      }
      setToastType("success");
      setShowToast(true);
      await fetchCart();
    } catch (error) {
      console.error('Error updating cart:', error);
      setToastMessage("Failed to update cart. Please try again.");
      setToastType("error");
      setShowToast(true);
    } finally {
      setUpdatingItem(null);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const removeItem = async (productId) => {
    try {
      setUpdatingItem(productId); // Use this to disable the remove button as well
      await api.cart.remove(productId);
      setToastMessage("Item removed from cart!");
      setToastType("success");
      setShowToast(true);
      await fetchCart();
    } catch (error) {
      console.error('Error removing item:', error);
      setToastMessage("Failed to remove item. Please try again.");
      setToastType("error");
      setShowToast(true);
    } finally {
      setUpdatingItem(null);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <section className="px-4 md:px-10 lg:px-20">
          <div className="flex justify-center items-center h-64 mt-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading cart...</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="px-4 md:px-10 lg:px-20">
        <div className="flex gap-3 mt-20 text-sm">
          <Link to="/home" className="text-[#808080]">
            Home
          </Link>
          /
          <Link to="/cart">
            Cart
          </Link>
        </div>

        {cart.items.length === 0 ? (
          <div className="mt-10 text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <Link
              to="/home"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-10 flex justify-center overflow-x-auto">
              <ul className="flex justify-around w-full max-w-5xl shadow-md py-6 rounded min-w-[600px] text-center">
                <li className="w-1/4">Product</li>
                <li className="w-1/4">Price</li>
                <li className="w-1/4">Quantity</li>
                <li className="w-1/4">Subtotal</li>
              </ul>
            </div>

            {cart.items.map((item) => (
              <div key={item.productId} className="mt-10 flex justify-center overflow-x-auto">
                <div className="flex flex-wrap justify-between w-full max-w-5xl shadow-md py-5 px-4 rounded min-w-[600px]">
                  <div className="flex gap-5 w-1/4 items-center">
                    <img
                      src={item.image || 'src/assets/img/placeholder.png'}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                      onError={(e) => {
                        e.target.src = 'src/assets/img/placeholder.png';
                      }}
                    />
                    <div>
                      <h1 className="text-sm md:text-base font-semibold">{item.name}</h1>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="text-red-500 text-sm hover:underline mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="w-1/4 pt-3 text-center text-sm md:text-base">
                    <h1>Rs. {item.price?.toLocaleString('en-PK')}</h1>
                  </div>
                  <div className="w-1/4 pt-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        disabled={updatingItem === item.productId || item.quantity <= 1} // Disable when quantity is 1 or updating
                        className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        disabled={updatingItem === item.productId}
                        className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-1/4 pt-3 text-center text-sm md:text-base">
                    <h1>Rs. {(item.quantity * item.price)?.toLocaleString('en-PK')}</h1>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-10 mb-10 flex flex-col sm:flex-row justify-between gap-4 items-center">
              <Link
                to="/home"
                className="border border-gray-500 cursor-pointer rounded-sm py-3 px-10 font-bold w-full sm:w-auto text-center hover:bg-gray-50"
              >
                Continue Shopping
              </Link>
              {/* The "Update Cart" button is removed as changes are now instant */}
            </div>

            <div className="mt-10 border border-gray-300 p-6 rounded-lg w-full max-w-md ml-auto shadow-modern-lg">
              <h1 className="text-xl font-semibold mb-4">Cart Total</h1>
              <div className="flex justify-between mb-4">
                <h1>Subtotal</h1>
                <p className="font-semibold">Rs. {cart.total?.toLocaleString('en-PK')}</p>
              </div>
              <div className="border-b border-gray-200 mb-4"></div>
              <div className="flex justify-between mb-4">
                <h1>Shipping</h1>
                <p>Free</p>
              </div>
              <div className="border-b border-gray-200 mb-4"></div>
              <div className="flex justify-between mb-2">
                <h1 className="font-bold">Total</h1>
                <p className="font-bold text-primary text-lg">Rs. {cart.total?.toLocaleString('en-PK')}</p>
              </div>
              <div className="flex justify-center mt-6">
                <Link
                  to="/Billing"
                  className="bg-primary rounded-lg text-white py-4 px-8 cursor-pointer hover:bg-primary-600 text-center shadow-modern transition-all transform hover:scale-105"
                >
                  Process To Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </section>
      {/* Toast Notification */}
      {showToast && (
        <div
          className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-lg text-white 
            ${toastType === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
          {toastMessage}
        </div>
      )}
    </>
  );
};

export default Cart;
