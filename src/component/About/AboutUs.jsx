import Sale from "./Sale";
import Team from "./Team";
import Delivery from "../Delivery";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

import aboutUsImg from "../../assets/img/about-us.png";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="mb-16 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row relative">
          <div className="mt-10 lg:mt-10 lg:ml-[92px] w-full lg:w-1/2 z-10">
            <div className="flex gap-3 text-sm">
              <Link to="/home" className="text-[#808080]">
                Home
              </Link>
              /
              <Link to="/about" className="">
                About
              </Link>
            </div>
            <h1 className="text-4xl font-bold mt-10 lg:mt-40">Our Story</h1>
            <p className="mt-9 text-base text-gray-700 leading-relaxed">
              Launched in 2025, Martiva is South Asia's premier online shopping{" "}
              <br className="hidden sm:block" />
              marketplace with an active presence in Pakistan. Supported{" "}
              <br className="hidden sm:block" />
              by a wide range of tailored marketing, data, and service solutions,{" "}
              <br className="hidden sm:block" />
              Martiva has 10,500 sellers and 300 brands and serves 3{" "}
              <br className="hidden sm:block" />
              million customers across the region.
            </p>
            <p className="mt-7 text-base text-gray-700 leading-relaxed">
              Martiva has more than 1 Million products to offer, growing at a{" "}
              <br className="hidden sm:block" />
              very fast rate. Martiva offers a diverse assortment in categories{" "}
              <br className="hidden sm:block" />
              ranging from consumer electronics to lifestyle products.
            </p>
          </div>

          <div className="w-full lg:w-auto mt-10 lg:mt-20">
            <img
              src={aboutUsImg}
              alt="About Us"
              className="w-full max-w-[680px] lg:absolute lg:right-0"
            />
          </div>
        </div>
      </section>

      <Sale />
      <Team />
      <Delivery />
      <Footer />
    </>
  );
};

export default AboutUs;
