import Home from "../home";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Homess from "../Wishlist/Homess";
const Billing = () => {
  return (
    <>
      <Homess />
      <section className="mt-20 px-4 md:px-20 mb-20">
  <div className="flex flex-wrap gap-2 text-sm">
    <Link to="" className="text-[#808080]">Account /</Link>
    <Link to="/Account" className="text-[#808080]">My Account /</Link>
    <Link to="/Products" className="text-[#808080]">Product /</Link>
    <Link to="/cart" className="text-[#808080]">View Cart /</Link>
    <Link to="./">Checkout</Link>
  </div>

  <h1 className="text-2xl md:text-3xl font-semibold mb-12 mt-25">Billing Details</h1>

  <div className="flex flex-col lg:flex-row gap-10">
    <div className="w-full lg:w-1/2">
      <form>
        <div className="mb-6">
          <label className="text-[#9f9f9f] block mb-2">First Name</label>
          <input type="text" className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none" />
        </div>

        <div className="mb-6">
          <label className="text-[#9f9f9f] block mb-2">Company Name</label>
          <input type="text" className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none" />
        </div>

        <div className="mb-6">
          <label className="text-[#9f9f9f] block mb-2">Street Address</label>
          <input type="text" className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none" />
        </div>

        <div className="mb-6">
          <label className="text-[#9f9f9f] block mb-2">Apartment, floor, etc (optional)</label>
          <input type="text" className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none" />
        </div>

        <div className="mb-6">
          <label className="text-[#9f9f9f] block mb-2">Town/City</label>
          <input type="text" className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none" />
        </div>

        <div className="mb-6">
          <label className="text-[#9f9f9f] block mb-2">Phone Number</label>
          <input type="text" className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none" />
        </div>

        <div className="mb-6">
          <label className="text-[#9f9f9f] block mb-2">Email Address</label>
          <input type="text" className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none" />
        </div>

        <div className="flex items-start gap-3 mt-4">
          <input type="checkbox" className="w-5 h-5 mt-1" />
          <p className="text-sm text-[#333]">Save this information for faster check-out next time</p>
        </div>
      </form>
    </div>
    <div className="w-full lg:w-1/2 p-4 md:p-6">
      <div className="flex items-center gap-4 mb-6">
        <img src="src/assets/img/cart-img2.png" alt="Product" className=" object-cover" />
        <div className="flex justify-between w-full">
          <h2 className="text-lg font-semibold">LCD Monitor</h2>
          <p className="font-semibold">$650</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <img src="src/assets/img/cart-img1.png" alt="Product" className=" object-cover" />
        <div className="flex justify-between w-full">
          <h2 className="text-lg font-semibold">LCD Monitor</h2>
          <p className="font-semibold">$1100</p>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <h1 className="text-lg font-semibold">Subtotal</h1>
        <span className="font-semibold">$1750</span>
      </div>
      <div className="border-b border-gray-300 my-3"></div>

      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Shipping</h1>
        <span className="font-semibold">Free</span>
      </div>
      <div className="border-b border-gray-300 my-3"></div>
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Total</h1>
        <span className="font-semibold">$1750</span>
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-4">
          <input type="radio" name="selection" className="w-5 h-5" />
          <span className="font-medium">Bank</span>
          <div className="flex gap-2 ml-auto">
            <img src="src/assets/img/bkash.png" alt="Bkash" className="w-10 h-auto" />
            <img src="src/assets/img/visa.png" alt="Visa" className="w-10 h-auto" />
            <img src="src/assets/img/mscard.png" alt="MasterCard" className="w-10 h-auto" />
            <img src="src/assets/img/hindi-card.png" alt="Hindi Card" className="w-10 h-auto" />
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <input type="radio" name="selection" className="w-5 h-5" />
          <span className="font-medium">Cash on delivery</span>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-gray-700 px-3 py-3 w-full md:w-80 focus:outline-none"
          />
          <button className="py-[13px] px-11 rounded-sm font-semibold bg-[#DB4444] text-white hover:bg-red-500 w-full md:w-auto">
            Apply Coupon
          </button>
        </div>
        <button className="py-[13px] px-11 mt-6 w-full rounded-sm font-semibold bg-[#DB4444] text-white hover:bg-red-500">
          Place Order
        </button>
      </div>
    </div>
  </div>
</section>

      <Footer/>
    </>
  );
};

export default Billing;
