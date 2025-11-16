import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import NumericInput from 'react-numeric-input';

const Cart = () => {
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

        <div className="mt-10 flex justify-center overflow-x-auto">
          <ul className="flex justify-around w-full max-w-5xl shadow-md py-6 rounded min-w-[600px] text-center">
            <li className="w-1/4">Product</li>
            <li className="w-1/4">Price</li>
            <li className="w-1/4">Quantity</li>
            <li className="w-1/4">Subtotal</li>
          </ul>
        </div>

        {[1, 2].map((item) => (
          <div key={item} className="mt-10 flex justify-center overflow-x-auto">
            <div className="flex flex-wrap justify-between w-full max-w-5xl shadow-md py-5 px-4 rounded min-w-[600px]">
              <div className="flex gap-5 w-1/4 items-center">
                <img src={`src/assets/img/cart-img${item}.png`} alt="" className="w-20" />
                <h1 className="pt-3 text-sm md:text-base">Lcd Monitor</h1>
              </div>
              <div className="w-1/4 pt-3 text-center text-sm md:text-base">
                <h1>Rs. 182,000</h1>
              </div>
              <div className="w-1/4 pt-2 text-center">
                <NumericInput min={0} max={100} value={0} className="w-14 mx-auto" />
              </div>
              <div className="w-1/4 pt-3 text-center text-sm md:text-base">
                <h1>Rs. 182,000</h1>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-10 mb-10 flex flex-col sm:flex-row justify-between gap-4 items-center">
          <button className="border border-gray-500 cursor-pointer rounded-sm py-3 px-10 font-bold w-full sm:w-auto">
            Return To Shop
          </button>
          <button className="border border-gray-500 cursor-pointer rounded-sm py-3 px-12 font-bold w-full sm:w-auto">
            Update Cart
          </button>
        </div>

        {/* <div className="mt-10 mb-10 flex flex-col sm:flex-row items-start gap-5">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-gray-700 px-5 py-3 focus:outline-none w-full sm:w-80"
          />
          <button className="cursor-pointer rounded-lg py-3 px-10 font-semibold bg-primary text-white hover:bg-primary-600 w-full sm:w-auto shadow-modern transition-all">
            Apply Coupon
          </button>
        </div> */}

        <div className="mt-10 border border-gray-300 p-6 rounded-lg w-full max-w-md ml-auto shadow-modern-lg">
          <h1 className="text-xl font-semibold mb-4">Cart Total</h1>
          <div className="flex justify-between mb-4">
            <h1>Subtotal</h1>
            <p className="font-semibold">Rs. 490,000</p>
          </div>
          <div className="border-b border-gray-200 mb-4"></div>
          <div className="flex justify-between mb-4">
            <h1>Shipping</h1>
            <p>Free</p>
          </div>
          <div className="border-b border-gray-200 mb-4"></div>
          <div className="flex justify-between mb-2">
            <h1 className="font-bold">Total</h1>
            <p className="font-bold text-primary text-lg">Rs. 490,000</p>
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

      </section>
              <Footer />

    </>
  );
};

export default Cart;
