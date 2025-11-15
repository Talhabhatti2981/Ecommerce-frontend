import { Link } from "react-router-dom";

const Product = () => {
  const products = [
    {
      title: "Breed Dry Dog Food",
      price: "$100",
      image: "src/assets/img/dog-food.png",
      rating: 5,
      reviews: 65,
    },
    {
      title: "CANON EOS DSLR Camera",
      price: "$360",
      image: "src/assets/img/dslr.png",
      rating: 5,
      reviews: 65,
    },
    {
      title: "ASUS FHD Gaming Laptop",
      price: "$700",
      image: "src/assets/img/laptop.png",
      rating: 5,
      reviews: 65,
    },
    {
      title: "Curology Product Set",
      price: "$500",
      image: "src/assets/img/facewash.png",
      rating: 5,
      reviews: 65,
    },
    {
      title: "Kids Electric Car",
      price: "$960",
      image: "src/assets/img/electric-car.png",
      rating: 5,
      reviews: 65,
    },
    {
      title: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      image: "src/assets/img/shoes.png",
      rating: 5,
      reviews: 65,
    },
    {
      title: "GP11 Shooter USB Gamepad",
      price: "$660",
      image: "src/assets/img/game-usb.png",
      rating: 5,
      reviews: 55,
    },
    {
      title: "Quilted Satin Jacket",
      price: "$660",
      image: "src/assets/img/jacket.png",
      rating: 5,
      reviews: 55,
    },
  ];

  return (
    <section className="mb-24 py-10 px-4 sm:px-6 lg:px-20">
      <div>
        <div className="flex items-center mt-12">
          <div className="w-6 h-11 bg-[#DB4444] rounded-md" />
          <h1 className="text-[#DB4444] ml-5 font-bold text-lg">
            Our Products
          </h1>
        </div>

        <div className="mt-6">
          <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl">
            Explore Our Products
          </h1>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item, index) => (
            <div key={index}>
              <div className="relative group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover"
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
                <span className="text-[#DB4444] font-semibold">
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
              {/* Optional color dots */}
              {index >= 4 && (
                <div className="relative mt-2 flex gap-1">
                  <div className="rounded-full h-4 w-4 border border-black"></div>
                  <div className="absolute top-[2px] left-[2px] right-0 bg-black cursor-pointer rounded-full h-3 w-3"></div>
                  <div className="bg-red-500 rounded-full h-4 w-4 cursor-pointer"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button className="text-white px-8 py-3 cursor-pointer bg-[#DB4444] hover:bg-red-500">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
