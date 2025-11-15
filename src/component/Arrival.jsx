import { Link } from "react-router-dom";
const Arrival = () => {
  return (
    <section className="mb-60 ">
      <div className="overflow-hidden">
        <div className="flex items-center ml-4 md:ml-20 mt-8 md:mt-12  ">
          <div className="w-6 h-11 bg-[#DB4444] rounded-md " />
          <h1 className="text-[#DB4444] ml-3 md:ml-5 font-bold text-lg">Featured</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="font-semibold  ml-4 md:ml-20 mt-4 md:mt-5 text-2xl md:text-4xl">New Arrival</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-10 m-2 md:ml-20">
          <div className="relative mt-[68px] w-full md:w-[555px] h-[555px]">
  <img
    src="src/assets/img/black-frame.png"
    alt="PlayStation Frame"
    className="w-full h-[590px] object-cover"
  />
  <img
    src="src/assets/img/playstation.png"
    alt="PlayStation"
    className="absolute top-89 left-4 w-[360px] h-[233px] sm:w-[250px] sm:h-[200px] md:w-[350px] md:h-auto lg:w-[470px] lg:top-[120px]  lg:left-0"
  />
  <div className="absolute top-[150px] left-4 sm:top-[200px] md:top-[250px] lg:top-[330px] lg:left-0 p-4">
    <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pl-2 sm:pl-4 mt-4">
      PlayStation 5
    </h1>
    <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 pl-2 sm:pl-4">
      Black and White version of the PS5 <br /> coming out on sale.
    </p>
    <button className="text-white text-sm sm:text-base md:text-lg cursor-pointer hover:underline mt-4 pl-2 sm:pl-4">
      Shop Now
    </button>
  </div>
</div>


          <div className="relative w-full md:w-[555px] h-[555px]">
            <img
              src="src/assets/img/rec-frame.png"
              alt=""
              className="mt-17"
              width={555}
              style={{ height: "290px" }}
            />
            <img
  src="src/assets/img/women.png"
  alt=""
  className="absolute top-50 left-1/2 transform -translate-x-1/2 w-[310px] lg:left-[400px] h-[200px] lg:top-[138px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px]  lg:w-[310px] lg:h-[220px]"
/>

            <div className="absolute top-20 left-0 p-4">
              <h1 className="text-white mt-23 text-3xl pl-4">Women’s Collections</h1>
              <p className="text-white mt-3 pl-4">
                Featured woman collections that <br /> give you another vibe.
              </p>
              <Link to ="/">
              <button className="text-white cursor-pointer pl-4 text-xl hover:underline mt-4">
                Shop Now
              </button>
              </Link>
            </div>
          </div>

          <div className="relative mt-20 md:mt-76 -ml-5 md:-ml-152 w-full md:w-[260px]">
            <img
              src="src/assets/img/lightblack.png"
              alt="Background"
              className="w-full mt-20 ml-5"
            />
            <img
              src="src/assets/img/speaker.png"
              alt="Speaker"
              className="absolute top-55 left-38 w-[200px] transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute top-20 left-3 p-4">
              <h1 className="text-white mt-30 text-3xl pl-4">Speakers</h1>
              <p className="text-white mt-2 pl-4">Amazon wireless speakers</p>
              <button className="text-white cursor-pointer pl-4 text-xl hover:underline mt-4">
                Shop Now
              </button>
            </div>
          </div>

          <div className="relative mt-20 md:mt-76 -ml-5 md:-ml-3 w-full md:w-[260px]">
            <img
              src="src/assets/img/lightblack.png"
              alt="Background"
              className="w-full mt-20 ml-5"
            />
            <img
              src="src/assets/img/gucci.png"
              alt="Speaker"
              className="absolute top-55 left-38 w-[200px] transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute top-20 mt-22 left-3 p-2 sm:p-4 ">
  <h1 className="text-white mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl  pl-2 sm:pl-4">
    Perfume
  </h1>
  <p className="text-white mt-1 sm:mt-2 text-sm sm:text-base pl-2 sm:pl-4">
    GUCCI INTENSE OUD EDP
  </p>
  <button className="text-white cursor-pointer text-sm sm:text-base md:text-lg pl-2 sm:pl-4 hover:underline mt-3 sm:mt-4">
    Shop Now
  </button>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Arrival;

