import Home from "../home";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Home />

      <section className="mb-20 mt-20 px-6 md:px-20">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <ul>
            <Link to="../" className="text-[#808080]">Home</Link>
          </ul>
          /
          <Link to="./">Contact</Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 mt-20 w-full">
          <div className="flex-0 h-116 py-5 px-6 md:px-13 shadow-lg w-full lg:max-w-md">
            <div className="flex items-center gap-5 mb-4">
              <div className="rounded-full w-12 h-12 bg-[#DB4444] flex items-center justify-center">
                <FiPhone className="text-white cursor-pointer text-xl" />
              </div>
              <h1 className="text-xl font-semibold">Call To Us</h1>
            </div>

            <p className="text-lg w-full mb-2">
              We are available 24/7, 7 days a week.
            </p>

            <p className="text-md mb-6 pt-5">
              Phone:{" "}
              <a href="tel:+8801611112222" className="hover:underline">
                +8801611112222
              </a>
            </p>

<div className="border-b border-gray-400 w-[300px] mb-10 hidden sm:block"></div>

            <div className="flex items-center gap-5 mb-4">
              <div className="rounded-full w-12 h-12 bg-[#DB4444] flex items-center justify-center">
                <IoMailOutline className="text-white text-xl cursor-pointer" />
              </div>
              <h1 className="text-xl font-semibold">Write To Us</h1>
            </div>

            <p className="text-base mb-4">
              Fill out our form and we will contact <br /> you within 24 hours.
            </p>

            <p className="text-md">
              Email:
              <a href="mailto:customer@exclusive.com" className="hover:underline">
                customer@exclusive.com
              </a>
            </p>

            <p className="text-md mt-2">
              Email:
              <a href="mailto:support@exclusive.com" className="hover:underline">
                support@exclusive.com
              </a>
            </p>
          </div>

          <div className="w-full  ">
            <div className="shadow-md rounded-md p-6 h-116 bg-white w-full">
              <form className="flex flex-col lg:flex-row flex-wrap gap-4 w-full mt-7">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-sm bg-[#f5f5f5] h-14 px-4 w-full lg:flex-1 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-sm bg-[#f5f5f5] h-14 px-4 w-full lg:flex-1 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="rounded-sm bg-[#f5f5f5] h-14 px-4 w-full lg:flex-1 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                />
              </form>

              <textarea
                placeholder="Your Message"
                className="mt-6 rounded-sm bg-[#f5f5f5] p-4 h-50 w-full resize-none focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
              ></textarea>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-[#DB4444] text-white w-55 h-12 px-8 rounded-sm cursor-pointer hover:bg-red-600 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
