import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState, useEffect } from "react"; // Import useState and useEffect
import api from "../utils/api"; // Import your API utility

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MartivaHeroSection = () => {
  const [martivaSlides, setMartivaSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await api.categories.getSlides(); // Using the new API call
        setMartivaSlides(response.data || []);
      } catch (err) {
        console.error("Error fetching hero slides:", err);
        setError("Failed to load hero banners. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchSlides();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-8 px-4 md:px-10 lg:px-20">
        <div className="container mx-auto h-80 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full py-8 px-4 md:px-10 lg:px-20">
        <div className="container mx-auto h-80 flex items-center justify-center">
          <p className="text-red-500 text-lg text-center">{error}</p>
        </div>
      </section>
    );
  }

  if (martivaSlides.length === 0) {
    return (
      <section className="w-full py-8 px-4 md:px-10 lg:px-20">
        <div className="container mx-auto h-80 flex items-center justify-center">
          <p className="text-gray-600 text-lg text-center">No banners available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-8 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              <div className="h-80 md:h-96 lg:h-[500px] overflow-hidden">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  navigation={true}
                  className="h-full"
                >
                  {martivaSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className="w-full h-full relative">
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
                          <p className="text-gray-200 text-sm md:text-base">{slide.description}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center bg-white">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Welcome to <span className="text-primary">Martiva</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Your one-stop destination for all your shopping needs. We offer a wide range of 
                  products from fashion to electronics, all at competitive prices with exceptional service.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Wide Product Range</h4>
                      <p className="text-gray-600 text-sm">
                        Browse through thousands of products across multiple categories
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Secure Payment</h4>
                      <p className="text-gray-600 text-sm">
                        Multiple payment options with secure and encrypted transactions
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Easy Returns</h4>
                      <p className="text-gray-600 text-sm">
                        Hassle-free return policy for your peace of mind
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                    Shop Now
                  </button>
                  <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MartivaHeroSection;


