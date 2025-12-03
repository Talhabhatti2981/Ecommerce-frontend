import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../utils/api";

const Billing = () => {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: '',
    saveInfo: false
  });
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [processing, setProcessing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // 'success' or 'error'
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await api.cart.get();
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
      alert('Failed to load cart. Please try again.');
      navigate('/cart');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = async () => {
    // Validate required fields
    if (!billingInfo.firstName || !billingInfo.streetAddress ||
        !billingInfo.townCity || !billingInfo.phoneNumber || !billingInfo.emailAddress) {
      setToastMessage('Please fill in all required billing information.');
      setToastType("error");
      setShowToast(true);
      return;
    }

    // Validate card details if bank payment is selected
    if (paymentMethod === 'bank') {
      if (!cardDetails.cardholderName || !cardDetails.cardNumber ||
          !cardDetails.expiryDate || !cardDetails.cvv) {
        setToastMessage('Please fill in all card details.');
        setToastType("error");
        setShowToast(true);
        return;
      }
      // Basic validation
      if (cardDetails.cardNumber.replace(/\s/g, '').length < 13) {
        setToastMessage('Please enter a valid card number.');
        setToastType("error");
        setShowToast(true);
        return;
      }
      if (!/^\d{2}\/\d{2}$/.test(cardDetails.expiryDate)) {
        setToastMessage('Please enter a valid expiry date (MM/YY).');
        setToastType("error");
        setShowToast(true);
        return;
      }
      if (cardDetails.cvv.length < 3) {
        setToastMessage('Please enter a valid CVV.');
        setToastType("error");
        setShowToast(true);
        return;
      }
    }

    setProcessing(true);

    try {
      // Simulate payment processing (replace with actual payment gateway integration)
      await new Promise(resolve => setTimeout(resolve, 2000));

      setToastMessage(`Order placed successfully!\nPayment Method: ${paymentMethod === 'bank' ? 'Credit/Debit Card' : 'Cash on Delivery'}\nTotal: Rs. ${cart.total?.toLocaleString('en-PK')}`);
      setToastType("success");
      setShowToast(true);

      // Clear cart after successful order
      await api.cart.clear();
      setTimeout(() => navigate('/home'), 3000); // Redirect after toast

    } catch (error) {
      console.error('Error placing order:', error);
      setToastMessage('Failed to place order. Please try again.');
      setToastType("error");
      setShowToast(true);
    } finally {
      setProcessing(false);
      setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <section className="mt-20 px-4 md:px-20 mb-20">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading checkout...</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (cart.items.length === 0) {
    return (
      <>
        <Navbar />
        <section className="mt-20 px-4 md:px-20 mb-20">
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products before checkout!</p>
            <Link
              to="/home"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark"
            >
              Continue Shopping
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="mt-20 px-4 md:px-20 mb-20">
        <div className="flex flex-wrap gap-2 text-sm">
          <Link to="/home" className="text-[#808080]">Home /</Link>
          <Link to="/cart" className="text-[#808080]">Cart /</Link>
          <Link to="/Billing">Checkout</Link>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold mb-12 mt-8">Billing Details</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <form>
              <div className="mb-6">
                <label className="text-[#9f9f9f] block mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={billingInfo.firstName}
                  onChange={handleInputChange}
                  className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="text-[#9f9f9f] block mb-2">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={billingInfo.companyName}
                  onChange={handleInputChange}
                  className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label className="text-[#9f9f9f] block mb-2">Street Address *</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={billingInfo.streetAddress}
                  onChange={handleInputChange}
                  className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="text-[#9f9f9f] block mb-2">Apartment, floor, etc (optional)</label>
                <input
                  type="text"
                  name="apartment"
                  value={billingInfo.apartment}
                  onChange={handleInputChange}
                  className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label className="text-[#9f9f9f] block mb-2">Town/City *</label>
                <input
                  type="text"
                  name="townCity"
                  value={billingInfo.townCity}
                  onChange={handleInputChange}
                  className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="text-[#9f9f9f] block mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={billingInfo.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="text-[#9f9f9f] block mb-2">Email Address *</label>
                <input
                  type="email"
                  name="emailAddress"
                  value={billingInfo.emailAddress}
                  onChange={handleInputChange}
                  className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="flex items-start gap-3 mt-4">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={billingInfo.saveInfo}
                  onChange={handleInputChange}
                  className="w-5 h-5 mt-1"
                />
                <p className="text-sm text-[#333]">Save this information for faster check-out next time</p>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 p-4 md:p-6">
            {/* Cart Items Summary */}
            {cart.items.map((item) => (
              <div key={item.productId} className="flex items-center gap-4 mb-6">
                <img
                  src={item.image || '/src/assets/img/placeholder.png'}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                  onError={(e) => {
                    e.target.src = '/src/assets/img/placeholder.png';
                  }}
                />
                <div className="flex justify-between w-full">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="font-semibold">Rs. {(item.quantity * item.price)?.toLocaleString('en-PK')}</p>
                </div>
              </div>
            ))}

            <div className="flex justify-between mt-6">
              <h1 className="text-lg font-semibold">Subtotal</h1>
              <span className="font-semibold">Rs. {cart.total?.toLocaleString('en-PK')}</span>
            </div>
            <div className="border-b border-gray-300 my-3"></div>

            <div className="flex justify-between">
              <h1 className="text-lg font-semibold">Shipping</h1>
              <span className="font-semibold">Free</span>
            </div>
            <div className="border-b border-gray-300 my-3"></div>
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold">Total</h1>
              <span className="font-semibold text-primary text-lg">Rs. {cart.total?.toLocaleString('en-PK')}</span>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-5 h-5"
                />
                <span className="font-medium">Credit/Debit Card</span>
                <div className="flex gap-2 ml-auto">
                  <img src="src/assets/img/bkash.png" alt="Bkash" className="w-10 h-auto" />
                  <img src="src/assets/img/visa.png" alt="Visa" className="w-10 h-auto" />
                  <img src="src/assets/img/mscard.png" alt="MasterCard" className="w-10 h-auto" />
                  <img src="src/assets/img/hindi-card.png" alt="Hindi Card" className="w-10 h-auto" />
                </div>
              </div>

              {paymentMethod === 'bank' && (
                <div className="mb-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <h3 className="font-semibold mb-4">Card Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-600 block mb-1">Cardholder Name</label>
                      <input
                        type="text"
                        name="cardholderName"
                        value={cardDetails.cardholderName}
                        onChange={handleCardInputChange}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 block mb-1">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleCardInputChange}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                      />
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="text-sm text-gray-600 block mb-1">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={cardDetails.expiryDate}
                          onChange={handleCardInputChange}
                          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="MM/YY"
                          maxLength="5"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="text-sm text-gray-600 block mb-1">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={cardDetails.cvv}
                          onChange={handleCardInputChange}
                          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="123"
                          maxLength="4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 mb-6">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-5 h-5"
                />
                <span className="font-medium">Cash on delivery</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={processing}
                className="py-[13px] px-11 mt-6 w-full rounded-lg font-semibold bg-primary text-white hover:bg-primary-600 shadow-modern transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {processing ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </div>
        </div>
      </section>
      {showToast && (
        <div
          className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-lg text-white 
            ${toastType === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
          {toastMessage.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Billing;
