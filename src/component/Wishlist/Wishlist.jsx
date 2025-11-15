import Footer from "../Footer";
import Home from "../home";
import { Link } from "react-router-dom";
import Homess from "./Homess";

const Wishlist = () => {
  return (
    <>
      <Homess />
      <section className="px-4 sm:px-6 md:px-10">
        <div>
          <div>
            <h1 className="text-[20px] sm:text-[24px] my-10 mt-35 ml-10">
              Wishlist (4)
            </h1>
            <div className="flex justify-end mb-10 lg:-mt-20 md:lg:-mt-20">
              <button className="border border-[#808080] lg:mr-10 py-2 px-6 sm:py-3 sm:px-12 font-semibold cursor-pointer hover:bg-red-500 hover:text-white hover:border-red-500">
                Move All To Bag
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="w-full sm:w-[45%] md:w-[22%] text-center">
                <div className="relative group w-full">
                  <img
                    src="src/assets/img/wish-img1.png"
                    alt=""
                    className="mx-auto"
                  />

                  <Link
                    to="/cart"
                    className="absolute bottom-0 left-0 w-69 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base"
                  >
                    Add to Cart
                  </Link>
                </div>

                <h1 className="font-medium mt-4">Gucci duffle bag</h1>
                <div className="flex justify-center gap-3 mt-1">
                  <span className="text-[#db4444] font-medium">$960</span>
                  <span className="text-[#808080] font-medium line-through">
                    $1160
                  </span>
                </div>
              </div>

              <div className="w-full sm:w-[45%] md:w-[22%] text-center">
                <div className="relative group w-full">
                  <img
                    src="src/assets/img/wish-img2.png"
                    alt=""
                    className="mx-auto"
                  />

                  <Link
                    to="/cart"
                    className="absolute bottom-0 left-0 w-69 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base"
                  >
                    Add to Cart
                  </Link>
                </div>

                <h1 className="font-medium mt-2">RGB liquid CPU Cooler</h1>
                <div className="flex justify-center gap-3 mt-1">
                  <span className="text-[#db4444] font-medium">$1960</span>
                </div>
              </div>

              <div className="w-full sm:w-[45%] md:w-[22%] text-center">
                <div className="relative group w-full">
                  <img
                    src="src/assets/img/wish-img3.png"
                    alt=""
                    className="mx-auto"
                  />

                  <Link
                    to="/cart"
                    className="absolute bottom-0 left-0 w-69 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base"
                  >
                    Add to Cart
                  </Link>
                </div>

                <h1 className="font-medium mt-2">GP11 Shooter USB Gamepad</h1>
                <div className="flex justify-center gap-3 mt-1">
                  <span className="text-[#db4444] font-medium">$550</span>
                </div>
              </div>

              <div className="w-full sm:w-[45%] md:w-[22%] text-center">
                <div className="relative group w-full">
                  <img
                    src="src/assets/img/wish-img4.png"
                    alt=""
                    className="mx-auto"
                  />

                  <Link
                    to="/cart"
                    className="absolute bottom-0 left-0 w-69 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base"
                  >
                    Add to Cart
                  </Link>
                </div>

                <h1 className="font-medium mt-2">Quilted Satin Jacket</h1>
                <div className="flex justify-center gap-3 mt-1">
                  <span className="text-[#db4444] font-medium">$750</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-12 mb-10">
              <div className="flex items-center">
                <div className="w-6 h-11 bg-[#DB4444]  mt-10 rounded-md ml-10 mr-4" />
                <h1 className="text-[#DB4444] font-bold text-lg  mt-10 ">
                  Just For You
                </h1>
              </div>
              <button className="border border-[#808080] cursor-pointer  font-semibold py-3 lg:mr-10 px-10 mt-4 sm:mt-0 hover:bg-red-500 hover:text-white hover:border-red-500">
                See All
              </button>
            </div>

            <div className="flex mt-40 flex-wrap justify-center gap-6 mb-16">
              <div className="w-full sm:w-[45%] md:w-[22%] text-center">
                <div className="relative group w-full">
                  <img
                    src="src/assets/img/wish-img5.png"
                    alt=""
                    className="mx-auto"
                  />

                  <Link
                    to="/cart"
                    className="absolute bottom-0 left-0 w-69 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base"
                  >
                    Add to Cart
                  </Link>
                </div>

                <h1 className="font-medium mt-2">ASUS FHD Gaming Laptop</h1>
                <div className="flex justify-center gap-3 mt-1">
                  <span className="text-[#db4444] font-medium">$960</span>
                  <span className="text-[#808080] font-medium line-through">
                    $1160
                  </span>
                </div>
                <div className="flex justify-center gap-2 mt-3">
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <h1 className="text-[#888888] font-semibold">(65)</h1>
                </div>
              </div>

              <div className="w-full sm:w-[45%] md:w-[22%] text-center">
                <div className="relative group w-full">
                  <img
                    src="src/assets/img/wish-img6.png"
                    alt=""
                    className="mx-auto"
                  />

                  <Link
                    to="/cart"
                    className="absolute bottom-0 left-0 w-69 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base"
                  >
                    Add to Cart
                  </Link>
                </div>

                <h1 className="font-medium mt-2">IPS LCD Gaming Monitor</h1>
                <div className="flex justify-center gap-3 mt-1">
                  <span className="text-[#db4444] font-medium">$1160</span>
                </div>
                <div className="flex justify-center gap-2 mt-3">
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <h1 className="text-[#888888] font-semibold">(65)</h1>
                </div>
              </div>

              <div className="w-full sm:w-[45%] md:w-[22%] text-center">
                <div className="relative group w-full">
                  <img
                    src="src/assets/img/wish-img7.png"
                    alt=""
                    className="mx-auto"
                  />

                  <Link
                    to="/cart"
                    className="absolute bottom-0 left-0 w-69 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base"
                  >
                    Add to Cart
                  </Link>
                </div>

                <h1 className="font-medium mt-2">HAVIT HV-G92 Gamepad</h1>
                <div className="flex justify-center gap-3 mt-1">
                  <span className="text-[#db4444] font-medium">$560</span>
                </div>
                <div className="flex justify-center gap-2 mt-3">
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <h1 className="text-[#888888] font-semibold">(65)</h1>
                </div>
              </div>

              <div className="w-full sm:w-[45%] md:w-[22%] text-center">
                <div className="relative group w-full">
                  <img
                    src="src/assets/img/wish-img8.png"
                    alt=""
                    className="mx-auto"
                  />

                  <Link
                    to="/cart"
                    className="absolute bottom-0 left-0 w-69 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base"
                  >
                    Add to Cart
                  </Link>
                </div>

                <h1 className="font-medium mt-2">AK-900 Wired Keyboard</h1>
                <div className="flex justify-center gap-3 mt-1">
                  <span className="text-[#db4444] font-medium">$200</span>
                </div>
                <div className="flex justify-center gap-2 mt-3">
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <img
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                  <h1 className="text-[#888888] font-semibold">(65)</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Wishlist;
