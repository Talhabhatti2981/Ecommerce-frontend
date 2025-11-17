import { Link } from "react-router-dom";
import Footer from "../Footer";

const Account = () => {
  return (
    <>
      <section className="mb-20 px-4 md:px-10 lg:px-20 pt-6">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <Link to="/home" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/Account" className="text-gray-800 font-medium">
            My Account
          </Link>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-10">
            <div>
              <h1 className="font-semibold text-lg mb-4">Manage My Account</h1>
              <ul className="space-y-3 text-gray-500">
                <li className="cursor-pointer hover:text-red-500">My Profile</li>
                <li className="cursor-pointer hover:text-red-500">Address Book</li>
                <li className="cursor-pointer hover:text-red-500">My Payment Options</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold text-lg mb-4">My Orders</h1>
              <ul className="space-y-3 text-gray-500">
                <li className="cursor-pointer hover:text-red-500">My Returns</li>
                <li className="cursor-pointer hover:text-red-500">My Cancellations</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold text-lg">My Wishlist</h1>
            </div>
          </div>

          {/* Main form */}
          <div className="w-full lg:w-2/3 p-6 shadow-sm bg-white rounded-md">
            <form>
              <h1 className="text-red-500 font-semibold text-xl mb-6">Edit Your Profile</h1>

              {/* Name fields */}
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex flex-col w-full">
                  <label className="mb-2 font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2 font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Address */}
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex flex-col w-full">
                  <label className="mb-2 font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2 font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col space-y-5 w-full mb-6">
                <label className="mb-2 font-medium text-gray-700">Password Changes</label>
                <input
                  type="password"
                  placeholder="Current Password"
                  className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-end mt-6 gap-4">
                <button type="button" className="text-gray-600 hover:text-black">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition duration-200 shadow-modern transform hover:scale-105"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Account;
