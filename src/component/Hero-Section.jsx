import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section>
      <div className="relative h-full">
        <div className="flex flex-col lg:flex-row lg:pl-20 px-4">
          <ul className="space-y-4 mt-6 lg:mt-9 font-medium text-gray-800 w-full lg:w-60">
            <li className="flex justify-between items-center cursor-pointer hover:text-blue-600">
              <a href="">Woman’s Fashion</a>
              <ChevronRightIcon className="w-4 h-4 text-gray-500 hidden lg:block" />
            </li>
            <li className="flex justify-between items-center cursor-pointer hover:text-blue-600">
              <a href="">Men’s Fashion</a>
              <ChevronRightIcon className="w-4 h-4 text-gray-500 hidden lg:block" />
            </li>
            <li className="hover:text-blue-600"><a href="">Electronics</a></li>
            <li className="hover:text-blue-600"><a href="">Home & Lifestyle</a></li>
            <li className="hover:text-blue-600"><a href="">Medicine</a></li>
            <li className="hover:text-blue-600"><a href="">Sports & Outdoor</a></li>
            <li className="hover:text-blue-600"><a href="">Baby’s & Toys</a></li>
            <li className="hover:text-blue-600"><a href="">Groceries & Pets</a></li>
            <li className="hover:text-blue-600"><a href="">Health & Beauty</a></li>
          </ul>


          <div className="hidden lg:block border-r border-gray-300 mx-6" />

          <div className="mt-6 lg:mt-12 w-full lg:w-[880px]">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }} 
            >
              <SwiperSlide>
                <div className="bg-black  w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-6 gap-6 lg:gap-40 shadow-lg rounded">
                  <div className="flex flex-col items-start text-left space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src="src/assets/img/apple-logo.png"
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
                  <img
                    src="src/assets/img/hero-img (2).png"
                    alt="Hero"
                    className="h-48 lg:h-[286px] object-contain"
                  />
                </div>
              </SwiperSlide>

             <SwiperSlide>
                <div className="bg-black w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-6 gap-6 lg:gap-40 shadow-lg rounded">
                  <div className="flex flex-col items-start text-left space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src="src/assets/img/apple-logo.png"
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
                  <img
                    src="src/assets/img/hero-img (2).png"
                    alt="Hero"
                    className="h-48 lg:h-[286px] object-contain"
                  />
                </div>
              </SwiperSlide>
                <SwiperSlide>
                <div className="bg-black w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-6 gap-6 lg:gap-40 shadow-lg rounded">
                  <div className="flex flex-col items-start text-left space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src="src/assets/img/apple-logo.png"
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
                  <img
                    src="src/assets/img/hero-img (2).png"
                    alt="Hero"
                    className="h-48 lg:h-[286px] object-contain"
                  />
                </div>
              </SwiperSlide>
                <SwiperSlide>
                <div className="bg-black w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-6 gap-6 lg:gap-40 shadow-lg rounded">
                  <div className="flex flex-col items-start text-left space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src="src/assets/img/apple-logo.png"
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
                  <img
                    src="src/assets/img/hero-img (2).png"
                    alt="Hero"
                    className="h-48 lg:h-[286px] object-contain"
                  />
                </div>
              </SwiperSlide>
                <style>
        {`
          .swiper-pagination {
            text-align: center;
            
          }

          .swiper-pagination-bullet {
            background-color: #808080;
            opacity: 1;
            height:10px
          }

          .swiper-pagination-bullet-active {
            background-color: red;
            border:0.5px solid grey;
            border-radius:50%
          }
        `}
      </style>
            </Swiper>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
