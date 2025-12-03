import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import "swiper/css";
import "swiper/css/navigation";

import SectionHeader from "./common/SectionHeader";
import api from "../utils/api"; // Import your API utility

// Placeholder icons for categories - these will be chosen more smartly later or from API
const categoryIcons = {
  "Women's Clothes": "👜",
  "Men's Fashion": "👕",
  "Electronics": "📱",
  "Health": "❤️",
  "Toys": "🧸",
  "Beauty & Care": "💄", // Added based on your hardcoded list
  "Home & Living": "🛋️", // Added based on your hardcoded list
  // Add more as needed
};

// Placeholder backgrounds for categories
const categoryBackgrounds = [
  "bg-pink-200",
  "bg-red-200",
  "bg-orange-200",
  "bg-yellow-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-indigo-200",
  "bg-purple-200",
];

const Category = () => {
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
        console.error("Error fetching categories for Explore More:", e);
        setError("Could not load categories. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryName) => {
    navigate(`/products/${encodeURIComponent(categoryName)}`);
  };

  if (loading) {
    return (
      <section className="mb-24 py-12 px-4 sm:px-6 md:px-20">
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-2"></div>
          <p className="text-gray-600">Loading categories...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mb-24 py-12 px-4 sm:px-6 md:px-20">
        <div className="text-center py-10">
          <p className="text-red-500 text-lg">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-24 py-12 px-4 sm:px-6 md:px-20">
      <SectionHeader title="Explore More" subtitle="" />

      {categories.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">No categories available at the moment.</p>
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={category.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-20 h-20 rounded-xl flex items-center justify-center text-3xl
                    ${categoryBackgrounds[index % categoryBackgrounds.length]} // Cycle through backgrounds
                    hover:scale-105 transition-transform cursor-pointer`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {categoryIcons[category.name] || "📦"} {/* Use specific icon or a fallback */}
                </div>
                <p className="mt-2 text-center text-sm font-medium">{category.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Category;
