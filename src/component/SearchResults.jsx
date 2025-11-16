import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionHeader from "./common/SectionHeader";

// Combined products from all sources
const allProducts = [
  {
    title: "Breed Dry Dog Food",
    price: "Rs. 28,000",
    image: "src/assets/img/dog-food.png",
    rating: 5,
    reviews: 65,
    category: "Pet Supplies",
  },
  {
    title: "CANON EOS DSLR Camera",
    price: "Rs. 100,800",
    image: "src/assets/img/dslr.png",
    rating: 5,
    reviews: 65,
    category: "Electronics",
  },
  {
    title: "ASUS FHD Gaming Laptop",
    price: "Rs. 196,000",
    image: "src/assets/img/laptop.png",
    rating: 5,
    reviews: 65,
    category: "Electronics",
  },
  {
    title: "Curology Product Set",
    price: "Rs. 140,000",
    image: "src/assets/img/facewash.png",
    rating: 5,
    reviews: 65,
    category: "Health & Beauty",
  },
  {
    title: "Kids Electric Car",
    price: "Rs. 268,800",
    image: "src/assets/img/electric-car.png",
    rating: 5,
    reviews: 65,
    category: "Toys",
  },
  {
    title: "Jr. Zoom Soccer Cleats",
    price: "Rs. 324,800",
    image: "src/assets/img/shoes.png",
    rating: 5,
    reviews: 65,
    category: "Sports",
  },
  {
    title: "GP11 Shooter USB Gamepad",
    price: "Rs. 184,800",
    image: "src/assets/img/game-usb.png",
    rating: 5,
    reviews: 55,
    category: "Electronics",
  },
  {
    title: "Quilted Satin Jacket",
    price: "Rs. 184,800",
    image: "src/assets/img/jacket.png",
    rating: 5,
    reviews: 55,
    category: "Fashion",
  },
  {
    title: "The north coat",
    price: "Rs. 72,800",
    image: "src/assets/img/coat.png",
    rating: 5,
    reviews: 65,
    category: "Fashion",
  },
  {
    title: "Gucci duffle bag",
    price: "Rs. 268,800",
    image: "src/assets/img/bag.png",
    rating: 5,
    reviews: 65,
    category: "Fashion",
  },
  {
    title: "RGB liquid CPU Cooler",
    price: "Rs. 44,800",
    image: "src/assets/img/cooler.png",
    rating: 5,
    reviews: 65,
    category: "Electronics",
  },
  {
    title: "S-Series Comfort Chair",
    price: "Rs. 100,800",
    image: "src/assets/img/booksell.png",
    rating: 5,
    reviews: 65,
    category: "Furniture",
  },
  {
    title: "iPhone 14 Series",
    price: "Rs. 280,000",
    image: "src/assets/img/hero-img (2).png",
    rating: 5,
    reviews: 150,
    category: "Electronics",
  },
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query.trim()) {
      const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <>
      <Navbar />
      <section className="min-h-screen px-4 md:px-10 lg:px-20 py-10">
        <div className="mb-6">
          <Link to="/home" className="text-gray-600 hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Search Results</span>
        </div>

        {query ? (
          <>
            <SectionHeader
              title="Search Results"
              subtitle={`Found ${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} for "${query}"`}
            />

            {searchResults.length > 0 ? (
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {searchResults.map((item, index) => (
                  <div key={index} className="group">
                    <div className="relative group cursor-pointer">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full object-cover rounded-lg shadow-modern"
                      />
                      <Link
                        to="/cart"
                        className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Add to Cart
                      </Link>
                    </div>
                    <h1 className="font-semibold pt-4">{item.title}</h1>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-primary font-semibold">
                        {item.price}
                      </span>
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <img
                          key={i}
                          src="src/assets/img/star.png"
                          alt="star"
                          className="w-4 h-4"
                        />
                      ))}
                      <span className="text-sm text-gray-600">
                        ({item.reviews})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600 mb-4">
                  No products found for "{query}"
                </p>
                <Link
                  to="/home"
                  className="text-primary hover:underline font-semibold"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 mb-4">
              Please enter a search query
            </p>
            <Link
              to="/home"
              className="text-primary hover:underline font-semibold"
            >
              Go to Home
            </Link>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default SearchResults;

