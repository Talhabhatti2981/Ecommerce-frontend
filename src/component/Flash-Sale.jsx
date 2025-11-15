import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import joyeImg from "../assets/img/joye.png";
import keyboardImg from "../assets/img/keyboard.png";
import lcdImg from "../assets/img/lcd.png";
import sofa from "../assets/img/sofa-chair.png";
import starImg from "../assets/img/star.png";

import leftArrow from "../assets/img/left.png";
import rightArrow from "../assets/img/right.png";
const Flash = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMinutes] = useState(0);
  const [secs, setSeconds] = useState(0);

  const deadline = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString();

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      img: joyeImg,
      title: "HAVIT HV-G92 Gamepad",
      price: "$120",
      oldPrice: "$160",
      rating: 86,
    },
    {
      img: keyboardImg,
      title: "AK-900 Wired Keyboard",
      price: "$980",
      oldPrice: "$980",
      rating: 75,
    },
    {
      img: lcdImg,
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      oldPrice: "$400",
      rating: 99,
    },
    {
      img: sofa,
      title: "S-Series Comfort Chair ",
      price: "$370",
      oldPrice: "$400",
      rating: 99,
    },
    {
      img: joyeImg,
      title: "HAVIT HV-G92 Gamepad",
      price: "$120",
      oldPrice: "$160",
      rating: 86,
    },
    {
      img: keyboardImg,
      title: "AK-900 Wired Keyboard",
      price: "$980",
      oldPrice: "$980",
      rating: 75,
    },
    {
      img: lcdImg,
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      oldPrice: "$400",
      rating: 99,
    },
  ];

  return (
    <section className="mb-4 shadow-md py-12 px-4 sm:px-6 md:px-20">
      <div>
        <div className="flex items-center mt-12">
          <div className="w-6 h-11 bg-[#DB4444] rounded-md" />
          <h1 className="text-[#DB4444] ml-5 font-bold text-lg">Today’s</h1>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center  gap-16 py-6">
          <h1 className="text-3xl font-bold text-gray-800 mt-5">Flash Sales</h1>

          <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-1">
            {[
              { label: "Days", value: days },
              { label: "Hours", value: hours },
              { label: "Mins", value: mins },
              { label: "Seconds", value: secs },
            ].map(({ label, value }, index, arr) => (
              <div key={label} className="flex items-center">
                <div className="rounded-2xl px-4 py-2 text-center w-20 flex flex-col items-center">
                  <span className="text-sm font-medium text-gray-500 mb-1">
                    {label}
                  </span>
                  <h1 className="text-2xl font-bold text-gray-800">
                    {value < 10 ? `0${value}` : value}
                  </h1>
                </div>
                {index < arr.length - 1 && (
                  <span className="text-red-600 mt-6 text-2xl font-bold mx-2">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-8">
          <div className="flex justify-end gap-2">
            <img
              src={leftArrow}
              alt="Previous"
              className="custom-prev cursor-pointer rounded-full p-3 bg-[#f5f5f5] z-20 hover:bg-gray-300"
            />
            <img
              src={rightArrow}
              alt="Next"
              className="custom-next cursor-pointer rounded-full p-3 bg-[#f5f5f5] z-20 hover:bg-gray-300"
            />
          </div>

          <Swiper
            className="mt-10"
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="group">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.img}
                      alt="product"
                      className="cursor-pointer w-full object-contain"
                    />
                    <Link
                      to="/cart"
                      className="absolute bottom-0 w-full left-0 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-sm sm:text-base"
                    >
                      Add to Cart
                    </Link>
                  </div>
                  <h1 className="font-semibold pt-4 text-sm sm:text-base md:text-lg">
                    {product.title}
                  </h1>
                  <div className="flex gap-4 mt-2">
                    <span className="text-[#DB4444] font-semibold">
                      {product.price}
                    </span>
                    <span className="line-through text-gray-500">
                      {product.oldPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={starImg}
                        alt="star"
                        className="w-4 h-4"
                      />
                    ))}
                    <span className="text-sm text-gray-600">
                      ({product.rating})
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="text-white p-3 px-6 cursor-pointer bg-[#DB4444] hover:bg-red-500 transition duration-300 text-sm sm:text-base">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Flash;
