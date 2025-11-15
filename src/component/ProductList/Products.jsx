import { useState } from "react";
import Home from "../home";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Products = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <Home />
      <section className="mb-40  px-4 md:px-10">
        <div className="m-4 md:m-8 flex flex-wrap gap-2 text-sm md:text-base">
          <Link to="/Account" className="text-[#808080]">
            Account /
          </Link>
          <Link to="" className="text-[#808080]">
            Gaming /
          </Link>
          <Link to="/" className="text-black">
            Havic HV G-92 Gamepad
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row justify-evenly space-y-10 lg:space-y-0 lg:space-x-5">
         <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-0 justify-items-center">
  <img src="src/assets/img/list1.png" alt="" className="h-[142px] object-contain" />
  <img src="src/assets/img/list2.png" alt="" className="h-[142px] object-contain" />
  <img src="src/assets/img/list3.png" alt="" className="h-[142px] object-contain" />
  <img src="src/assets/img/list4.png" alt="" className="h-[145px] object-contain" />
</div>


          <div className="flex justify-center">
            <img
              src="src/assets/img/product-list.png"
              alt=""
              className="h-[400px] md:h-[500px] lg:h-[635px] object-contain"
            />
          </div>

          <div className="max-w-xl">
            <h1 className="font-semibold text-xl md:text-2xl lg:text-[25px]">Havic HV G-92 Gamepad</h1>

            <div className="flex items-center flex-wrap gap-2 mt-5">
              <div className="flex gap-1">
                <img src="src/assets/img/star.png" alt="" />
                <img src="src/assets/img/star.png" alt="" />
                <img src="src/assets/img/star.png" alt="" />
                <img src="src/assets/img/star.png" alt="" />
                <img src="src/assets/img/e-star.png" alt="" />
              </div>
              <span className="text-[#909090] text-sm">(150 Reviews)</span>
              <span className="text-[#909090] text-sm">|</span>
              <span className="text-[#B2FFD1] text-sm">In Stock</span>
            </div>

            <div className="text-xl md:text-2xl mt-5">
              <span>$192.00</span>
            </div>

            <div className="mt-4 text-sm md:text-base">
              <p>
                PlayStation 5 Controller Skin High quality vinyl with air <br />
                channel adhesive for easy bubble free install & mess <br />
                free removal Pressure sensitive.
              </p>
            </div>

            <div className="border-b border-black w-full mt-7"></div>

            <div className="mt-6">
              <div className="flex items-center gap-3">
                <h1 className="text-lg md:text-2xl">Colors:</h1>
                <div className="relative">
                  <div className="h-5 w-5 border-2 border-black rounded-full z-10 relative"></div>
                  <div className="h-3 w-3 rounded-full absolute top-[4px] left-1 cursor-pointer bg-[#A0BCE0] z-0"></div>
                </div>

                <div className="h-5 w-5 bg-[#E07575] rounded-full cursor-pointer"></div>
              </div>

              <div className="flex mt-5 flex-wrap gap-2 items-center">
                <h1 className="text-lg md:text-[25px]">Size:</h1>
                <div className="flex gap-2 ml-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <div
                      key={size}
                      className="h-8 w-8 cursor-pointer text-center pt-[3px] border border-gray-600 rounded-sm hover:bg-[#DB4444] hover:text-white hover:border-red-600"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <div className="flex items-center border-2 border-gray-800 rounded-md overflow-hidden">
                  <button
                    onClick={decreaseQty}
                    className="px-4 py-2 text-lg font-semibold hover:bg-[#DB4444] hover:text-white transition"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 text-base font-medium">{quantity}</span>
                  <button
                    onClick={increaseQty}
                    className="px-4 py-2 text-lg font-semibold hover:bg-[#DB4444] hover:text-white transition"
                  >
                    +
                  </button>
                </div>

                <button className="px-6 py-3 cursor-pointer rounded-md border w-auto border-black font-semibold text-black hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition">
                  Buy Now
                </button>

                <div className="relative hover:bg-[#db4444] hover:text-white cursor-pointer hover:border-[#db4444]">
                  <div className="h-12 w-12 border border-gray-500 rounded-md"></div>
                  <img
                    src="src/assets/img/heart.png"
                    alt=""
                    className="absolute top-3 left-2"
                    width={30}
                  />
                </div>
              </div>

              <div className="h-auto mt-5 w-full border border-gray-400 rounded-t p-4">
                <div className="flex items-start gap-4">
                  <img src="src/assets/img/free-deli.png" alt="Free Delivery Icon" />
                  <div>
                    <h1 className="text-lg font-semibold">Free Delivery</h1>
                    <p className="text-sm text-gray-600 hover:underline cursor-pointer">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-auto w-full border border-gray-400 rounded-t p-4">
                <div className="flex items-start gap-4">
                  <img src="src/assets/img/return.png" alt="Free Delivery Icon" />
                  <div>
                    <h1 className="text-lg font-semibold">Return Delivery</h1>
                    <p className="text-sm text-gray-600">
                      Free 30 Days Delivery Returns. Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center mt-32 mb-16">
            <div className="w-6 h-11 bg-[#DB4444] rounded-md" />
            <h1 className="text-[#DB4444] ml-5 font-bold text-lg">Related Item</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                img: "wish-img7.png",
                title: "HAVIT HV-G92 Gamepad",
                price: "$120",
                old: "$160",
                reviews: "(88)"
              },
              {
                img: "wish-img8.png",
                title: "AK-900 Wired Keyboard",
                price: "$960",
                old: "$1160",
                reviews: "(75)"
              },
              {
                img: "wish-img6.png",
                title: "HAVIT HV-G92 Gamepad",
                price: "$370",
                old: "$400",
                reviews: "(99)"
              },
              {
                img: "wish-img3.png",
                title: "RGB liquid CPU Cooler",
                price: "$160",
                old: "$170",
                reviews: "(65)"
              }
            ].map(({ img, title, price, old, reviews }) => (
              <div key={title}>
                <img src={`src/assets/img/${img}`} alt="" />
                <h1 className="mt-2 font-semibold">{title}</h1>
                <div className="flex gap-4 mt-2">
                  <span className="text-[#E26767] font-semibold">{price}</span>
                  <span className="line-through text-[#808080]">{old}</span>
                </div>
                <div className="flex items-center gap-1 mt-3">
                  {Array(5).fill().map((_, i) => (
                    <img key={i} src="src/assets/img/star.png" alt="Star" />
                  ))}
                  <span className="ml-1 text-sm text-gray-500">{reviews}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
