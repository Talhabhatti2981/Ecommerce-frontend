import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Team = () => {
  return (
    <section className="mb-60 px-4">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="team-swiper"
      >
        {/* Team Members */}
        <SwiperSlide>
          <div className="text-center">
            <img
              src="src/assets/img/tom.png"
              alt="Tom Cruise"
              width={330}
              height={350}
              className="mx-auto rounded-xl"
            />
            <h1 className="text-[30px] mt-7 font-semibold">Tom Cruise</h1>
            <p>Founder & Chairman</p>
            <div className="flex justify-center gap-3 mt-3">
              <CiTwitter className="h-6 w-6 cursor-pointer hover:text-blue-300" />
              <FaInstagram className="h-6 w-6 cursor-pointer hover:text-pink-500" />
              <RiLinkedinLine className="h-6 w-6 cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-center">
            <img
              src="src/assets/img/emma.png"
              alt="Emma Watson"
              width={330}
              height={350}
              className="mx-auto rounded-xl"
            />
            <h1 className="text-[30px] mt-7 font-semibold">Emma Watson</h1>
            <p>Managing Director</p>
            <div className="flex justify-center gap-3 mt-3">
              <CiTwitter className="h-6 w-6 cursor-pointer hover:text-blue-300" />
              <FaInstagram className="h-6 w-6 cursor-pointer hover:text-pink-500" />
              <RiLinkedinLine className="h-6 w-6 cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-center">
            <img
              src="src/assets/img/will.png"
              alt="Will Smith"
              width={330}
              height={350}
              className="mx-auto rounded-xl"
            />
            <h1 className="text-[30px] mt-7 font-semibold">Will Smith</h1>
            <p>Product Designer</p>
            <div className="flex justify-center gap-3 mt-3">
              <CiTwitter className="h-6 w-6 cursor-pointer hover:text-blue-300" />
              <FaInstagram className="h-6 w-6 cursor-pointer hover:text-pink-500" />
              <RiLinkedinLine className="h-6 w-6 cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-center">
            <img
              src="src/assets/img/tom.png"
              alt="Will Smith"
              width={330}
              height={350}
              className="mx-auto rounded-xl"
            />
            <h1 className="text-[30px] mt-7 font-semibold">Jack</h1>
            <p>Product Designer</p>
            <div className="flex justify-center gap-3 mt-3">
              <CiTwitter className="h-6 w-6 cursor-pointer hover:text-blue-300" />
              <FaInstagram className="h-6 w-6 cursor-pointer hover:text-pink-500" />
              <RiLinkedinLine className="h-6 w-6 cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="text-center">
            <img
              src="src/assets/img/jack.jpg"
              alt="Will Smith"
              width={380}
              height={350}
              className="mx-auto rounded-xl"
            />
            <h1 className="text-[30px] mt-7 font-semibold">Will Smith</h1>
            <p>Product Designer</p>
            <div className="flex justify-center gap-3 mt-3">
              <CiTwitter className="h-6 w-6 cursor-pointer hover:text-blue-300" />
              <FaInstagram className="h-6 w-6 cursor-pointer hover:text-pink-500" />
              <RiLinkedinLine className="h-6 w-6 cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="text-center">
            <img
              src="src/assets/img/tom.png"
              alt="Will Smith"
              width={330}
              height={350}
              className="mx-auto rounded-xl"
            />
            <h1 className="text-[30px] mt-7 font-semibold">Peter</h1>
            <p>Product Designer</p>
            <div className="flex justify-center gap-3 mt-3">
              <CiTwitter className="h-6 w-6 cursor-pointer hover:text-blue-300" />
              <FaInstagram className="h-6 w-6 cursor-pointer hover:text-pink-500" />
              <RiLinkedinLine className="h-6 w-6 cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <style>
        {`
          .swiper-pagination {
            margin-top: 35px;
            position: relative;
            text-align: center;
            
          }

          .swiper-pagination-bullet {
            background-color: gray;
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
    </section>
  );
};

export default Team;
