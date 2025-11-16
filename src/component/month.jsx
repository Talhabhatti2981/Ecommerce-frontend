import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionHeader from "./common/SectionHeader";
import leftArrow from "../assets/img/left.png";
import rightArrow from "../assets/img/right.png";

const Month = () => {
  const products = [
    {
      img: 'src/assets/img/coat.png',
      title: 'The north coat',
      price: 'Rs. 72,800',
      oldPrice: 'Rs. 100,800',
    },
    {
      img: 'src/assets/img/bag.png',
      title: 'Gucci duffle bag',
      price: 'Rs. 268,800',
      oldPrice: 'Rs. 324,800',
    },
    {
      img: 'src/assets/img/cooler.png',
      title: 'RGB liquid CPU Cooler',
      price: 'Rs. 44,800',
      oldPrice: 'Rs. 47,600',
    },
    {
      img: 'src/assets/img/booksell.png',
      title: 'S-Series Comfort Chair',
      price: 'Rs. 100,800',
      oldPrice: 'Rs. 145,600',
    },
    {
      img: 'src/assets/img/coat.png',
      title: 'Another Coat',
      price: 'Rs. 83,720',
      oldPrice: 'Rs. 112,000',
    },
  ];

  return (
    <section className="mb-24 px-4 sm:px-6 md:px-20">
      <div>
        <SectionHeader 
          title="This Month" 
          subtitle="Browse By Category"
          className="mt-12"
        />

        <div className="flex flex-col sm:flex-row justify-between items-center mt-5 gap-4">
          <button className="text-white p-3 w-40 bg-primary hover:bg-primary-600 rounded-lg shadow-modern transition-all">
            View All
          </button>
        </div>
        <div className="flex justify-end gap-2 mt-6">
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
          spaceBetween={30}
          slidesPerView={4}
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mt-6"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="group cursor-pointer">
                <div className="relative">
                  <img src={product.img} alt={product.title} className="w-full block" />
                  <Link to ="/cart" className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </Link>
                </div>
                <h1 className="font-semibold pt-4">{product.title}</h1>
                <div className="flex gap-4 mt-2">
                  <span className="text-primary font-semibold">{product.price}</span>
                  <span className="line-through text-gray-500">{product.oldPrice}</span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="src/assets/img/star.png"
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
                  <span className="text-sm text-gray-600">(65)</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Month;
