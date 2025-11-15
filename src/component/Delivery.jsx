const Delivery = () => {
  return (
    <section className="mb-20">
      <div className="mt-20 flex flex-col md:flex-row justify-evenly items-center">
        <div className="text-center mb-8 md:mb-0">
          <img src="src/assets/img/fast-delivery.png" alt="" className="mx-auto" />
          <h1 className="mt-7 text-xl font-semibold">FREE AND FAST DELIVERY</h1>
          <p className="pt-2">Free delivery for all orders over $140</p>
        </div>
        <div className="text-center mb-8 md:mb-0">
          <img src="src/assets/img/services.png" alt="" className="mx-auto" />
          <h1 className="mt-7 text-xl font-semibold">24/7 CUSTOMER SERVICE</h1>
          <p className="pt-2">Friendly 24/7 customer support</p>
        </div>
        <div className="text-center mb-8 md:mb-0">
          <img src="src/assets/img/garuntee.png" alt="" className="mx-auto" />
          <h1 className="mt-7 text-xl font-semibold">MONEY BACK GUARANTEE</h1>
          <p className="pt-2">We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
