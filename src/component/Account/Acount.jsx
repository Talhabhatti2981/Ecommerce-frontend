import Home from "../home";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Homess from "../Wishlist/Homess";
const Acount = () => {
  return (
    <>
      <Homess />
      <section className="mb-20 px-4 md:px-10 lg:px-20">
  <div className="mt-6 mb-8 text-sm">
    <Link to="../" className="text-[#808080]">Home /</Link>
    <Link to="" className="ml-2">My Account</Link>
  </div>

  <div className="flex flex-col lg:flex-row gap-10">
    <div className="w-full lg:w-1/3">
      <div>
        <h1 className="font-semibold text-lg mb-4">Manage My Account</h1>
        <ul className="space-y-3">
          <li className="text-[#858080] cursor-pointer hover:text-red-500">My Profile</li>
          <li className="text-[#858080] cursor-pointer hover:text-red-500">Address Book</li>
          <li className="text-[#858080] cursor-pointer hover:text-red-500">My Payment Options</li>
        </ul>
      </div>

      <div className="mt-10">
        <h1 className="font-semibold text-lg mb-4">My Orders</h1>
        <ul className="space-y-3">
          <li className="text-[#858080] cursor-pointer hover:text-red-500">My Returns</li>
          <li className="text-[#858080] cursor-pointer hover:text-red-500">My Cancellations</li>
        </ul>
      </div>

      <div className="mt-10">
        <h1 className="font-semibold text-lg">My Wishlist</h1>
      </div>
    </div>
    <div className="w-full lg:w-2/3 p-6 shadow-sm bg-white">
      <form>
        <h1 className="text-red-500 font-semibold text-xl mb-6">Edit your profile</h1>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex flex-col w-full">
            <label className="mb-2 font-medium text-gray-700">First Name</label>
            <input type="text" className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none" placeholder="Enter your first name" />
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2 font-medium text-gray-700">Last Name</label>
            <input type="text" className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex flex-col w-full">
            <label className="mb-2 font-medium text-gray-700">Email</label>
            <input type="email" className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none" placeholder="Enter your email" />
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2 font-medium text-gray-700">Address</label>
            <input type="text" className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none" placeholder="Enter your address" />
          </div>
        </div>
        <div className="flex flex-col space-y-5 w-full">
          <label className="mb-2 font-medium text-gray-700">Password Changes</label>
          <input type="password" className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none" placeholder="Current Password" />
          <input type="password" className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none" placeholder="New Password" />
          <input type="password" className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none" placeholder="Confirm New Password" />
        </div>
      </form>
      <div className="flex flex-col sm:flex-row justify-end mt-8 gap-4">
        <button className="text-gray-600 hover:text-black">Cancel</button>
        <button
          type="submit"
          className="bg-[#DB4444] text-white px-6 py-3 rounded-sm hover:bg-red-600 transition duration-200"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</section>

      <Footer/>
</>
  );
};

export default Acount;
