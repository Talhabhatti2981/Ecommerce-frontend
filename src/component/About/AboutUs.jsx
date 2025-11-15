import Sale from "./Sale";
import Team from "./Team";
import Delivery from "../Delivery";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Homess from "../Wishlist/Homess";

const AboutUs = () => {
  return (
    <>
      <Homess />

      <section className="mb-16 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row relative">
          <div className="mt-10 lg:mt-10 lg:ml-[92px] w-full lg:w-1/2 z-10">
            <div className="flex gap-3 text-sm">
              <Link to="../" className="text-[#808080]">
                Home
              </Link>
              /
              <Link to="./" className="">
                About
              </Link>
            </div>
            <h1 className="text-4xl font-bold mt-10 lg:mt-40">Our Story</h1>
            <p className="mt-9 text-base text-gray-700 leading-relaxed">
              Launced in 2015, Exclusive is South Asia’s premier online shopping{" "}
              <br className="hidden sm:block" />
              makterplace with an active presense in Bangladesh. Supported{" "}
              <br className="hidden sm:block" />
              by wide range of tailored marketing, data and service solutions,{" "}
              <br className="hidden sm:block" />
              Exclusive has 10,500 sallers and 300 brands and serves 3{" "}
              <br className="hidden sm:block" />
              millioons customers across the region.
            </p>
            <p className="mt-7 text-base text-gray-700 leading-relaxed">
              Exclusive has more than 1 Million products to offer, growing at a{" "}
              <br className="hidden sm:block" />
              very fast. Exclusive offers a diverse assotment in categories{" "}
              <br className="hidden sm:block" />
              ranging from consumer.
            </p>
          </div>

          <div className="w-full lg:w-auto mt-10 lg:mt-20">
            <img
              src="src/assets/img/about-us.png"
              alt=""
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
