import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import appleLogo from "../assets/img/apple-logo.png";
import heroImage from "../assets/img/hero-img (2).png";
import api from "../utils/api";

const Hero = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.categories.getAll();
        setCategories(res.data || []);
      } catch (e) {
        setError("Could not load categories. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    // Navigate to a generic product listing page with the category name as a URL parameter
    navigate(`/products/${encodeURIComponent(category.name)}`);
  };

  return (
    <section>
      <div className="relative h-full">
        <div className="flex flex-col lg:flex-row lg:pl-20 px-4">
          {/* Sidebar Categories */}
          <ul className="space-y-4 mt-6 lg:mt-9 font-medium text-gray-800 w-full lg:w-60">
            {loading && <li>Loading categories...</li>}
            {error && <li className="text-red-500">{error}</li>}
            {!loading && !error && categories.map((category) => (
              <li key={category.id} className="hover:text-blue-600 cursor-pointer"
                  onClick={() => handleCategoryClick(category)}>
                <span>{category.name}</span>
              </li>
            ))}
          </ul>
          {/* Vertical Divider */}
          <div className="hidden lg:block border-r border-gray-300 mx-6" />

          {/* Hero Swiper Section - Keep existing logic for now, focuses on banner */}
          <div className="mt-6 lg:mt-12 w-full lg:w-[880px]">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              className="rounded-lg overflow-hidden"
            >
              {[1, 2, 3, 4].map((_, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-black w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-6 gap-6 lg:gap-40 shadow-lg rounded">
                    {/* Left Content */}
                    <div className="flex flex-col items-start text-left space-y-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={appleLogo}
                          alt="Apple Logo"
                          className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
                        />
                        <h1 className="text-white text-lg lg:text-xl">iPhone 14 Series</h1>
                      </div>
                      <p className="text-white text-2xl lg:text-4xl leading-snug">
                        Up to 10% <br /> off Voucher
                      </p>
                      <button className="text-white px-6 py-2 hover:underline">Shop Now →</button>
                    </div>

                    {/* Right Image */}
                    <img
                      src={heroImage}
                      alt="Hero"
                      className="h-48 lg:h-[286px] object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Swiper Style Overrides */}
            <style>
              {`
                .swiper-pagination {
                  text-align: center;
                }
                .swiper-pagination-bullet {
                  background-color: #808080;
                  opacity: 1;
                  height: 10px;
                }
                .swiper-pagination-bullet-active {
                  background-color: red;
                  border: 0.5px solid grey;
                  border-radius: 50%;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
