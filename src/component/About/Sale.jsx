import React from 'react'

const Sale = () => {
  return (
    <section className='mb-30 '>
       <div className="flex flex-wrap mt-[200px] justify-center gap-6 p-8">
  <div className="w-64 h-55  border border-gray-300 rounded-lg shadow-modern p-6 flex flex-col items-center text-center hover:bg-primary duration-300 transition-all transform hover:scale-105">
    <img
      src="src/assets/img/seller.png"
      alt="Seller"
      className="w-20 h-20 object-contain mb-4 "
    />
    <h1 className="font-bold text-3xl text-black mb-2 group-hover:text-white">10.5k</h1>
    <p className="text-black text-sm group-hover:text-white">Sellers active on our site</p>
  </div>

  <div className="w-64  border border-gray-300 rounded-lg shadow-modern p-6 flex flex-col items-center text-center hover:bg-primary duration-300 transition-all transform hover:scale-105">
    <img
      src="src/assets/img/product-sale.png"
      alt="Seller"
      className="w-20 h-20 object-contain mb-4 "
    />
    <h1 className="font-bold text-3xl text-black mb-2 group-hover:text-white">33k</h1>
    <p className="text-black text-sm group-hover:text-white">Monthly product sales</p>
  </div>

  <div className="w-64  border border-gray-300 rounded-lg shadow-modern p-6 flex flex-col items-center text-center hover:bg-primary duration-300 transition-all transform hover:scale-105">
    <img
      src="src/assets/img/coustomer-active.png"
      alt="Seller"
      className="w-20 h-20 object-contain mb-4"
    />
    <h1 className="font-bold text-3xl text-black mb-2 group-hover:text-white">45.2k</h1>
    <p className="text-black text-sm group-hover:text-white">Visitors every month</p>
  </div>

  <div className="w-64  border border-gray-300 rounded-lg shadow-modern p-6 flex flex-col items-center text-center hover:bg-primary duration-300 transition-all transform hover:scale-105">
    <img
      src="src/assets/img/gross-sale.png"
      alt="Seller"
      className="w-20 h-20 object-contain mb-4"
    />
    <h1 className="font-bold text-3xl text-black mb-2">25k</h1>
    <p className="text-black text-sm">Customers all time</p>
  </div>
</div>

      
    </section>
  )
}

export default Sale
