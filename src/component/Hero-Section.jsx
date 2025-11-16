import { Link, useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/search?q=iPhone");
  };

  return (
    <section>
      <div className="relative h-full">
        <div className="flex flex-col lg:flex-row lg:pl-20 px-4">
          <ul className="space-y-4 mt-6 lg:mt-9 font-medium text-gray-800 w-full lg:w-60">
            <li className="flex justify-between items-center cursor-pointer hover:text-primary transition-colors">
              <Link to="/search?q=Women's Fashion" className="w-full">Woman's Fashion</Link>
              <ChevronRightIcon className="w-4 h-4 text-gray-500 hidden lg:block" />
            </li>
            <li className="flex justify-between items-center cursor-pointer hover:text-primary transition-colors">
              <Link to="/search?q=Men's Fashion" className="w-full">Men's Fashion</Link>
              <ChevronRightIcon className="w-4 h-4 text-gray-500 hidden lg:block" />
            </li>
            <li className="hover:text-primary transition-colors">
              <Link to="/search?q=Electronics">Electronics</Link>
            </li>
            <li className="hover:text-primary transition-colors">
              <Link to="/search?q=Toys">Baby's & Toys</Link>
            </li>
            <li className="hover:text-primary transition-colors">
              <Link to="/search?q=Groceries">Groceries</Link>
            </li>
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
              {[1, 2, 3, 4].map((slide) => (
                <SwiperSlide key={slide}>
                  <div 
                    onClick={handleShopNow}
                    className="bg-black w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-6 gap-6 lg:gap-40 shadow-lg rounded cursor-pointer hover:shadow-xl transition-all transform hover:scale-[1.02]"
                  >
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
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShopNow();
                        }}
                        className="text-white px-6 py-2 hover:underline bg-primary/20 hover:bg-primary/30 rounded-lg transition-all"
                      >
                        Shop Now →
                      </button>
                    </div>
                    <img
                      src="src/assets/img/hero-img (2).png"
                      alt="Hero"
                      className="h-48 lg:h-[286px] object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
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
                    background-color: #FF6B35;
                    border: 0.5px solid grey;
                    border-radius: 50%;
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
