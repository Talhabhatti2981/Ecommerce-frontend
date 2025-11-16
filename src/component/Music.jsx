import react ,{useEffect, useState} from 'react'

const Music = () => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadline = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    if (time <= 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / (1000 * 60)) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval); 
  }, []);
  return (
    <section className="px-4">
      <div className="flex justify-center mb-20">
        <div className="relative w-full max-w-[1200px] h-[480px] sm:h-[500px] md:h-[520px] lg:h-[480px]">
          <img
            src="src/assets/img/frame.png"
            alt="Music Frame"
            className="w-full h-full object-cover rounded-md"
          />
          <h1 className="absolute top-6 left-4 sm:top-10 sm:left-16 text-success font-semibold text-sm sm:text-base">
            Categories
          </h1>

          <h1 className="absolute top-16 left-4 sm:top-24 sm:left-16 text-white text-xl sm:text-3xl md:text-5xl font-semibold leading-snug">
            Enhance Your <br /> Music Experience
          </h1>

     <div className="absolute top-[180px] left-4 sm:top-60 sm:left-16 flex flex-wrap sm:flex-nowrap gap-4 text-center text-white">
      {[
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ].map(({ label, value }) => (
        <div
          key={label}
          className="bg-white rounded-full px-4 sm:px-6 py-3 sm:py-4 shadow-md flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24"
        >
          <p className="text-xl sm:text-2xl font-bold text-black leading-none">
            {value < 10 ? `0${value}` : value}
          </p>
          <span className="text-xs sm:text-sm text-gray-700 mt-1">{label}</span>
        </div>
      ))}
    </div>


          <div className="absolute top-[300px] sm:top-[360px] left-4 sm:left-20">
          <button className="bg-success hover:bg-success/90 text-white font-medium mt-20 sm:mt-0 px-8 sm:px-10 py-3 h-12 sm:h-14 rounded-lg cursor-pointer text-sm sm:text-base shadow-modern transform hover:scale-105 transition-all">
  Buy Now!
</button>

          </div>

          <div className="absolute top-[100px] left-[45%] sm:left-[550px] hidden sm:block">
            <img src="src/assets/img/box.png" alt="Decorative Box" className="w-40 sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
