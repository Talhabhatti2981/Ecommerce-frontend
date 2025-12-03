import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Link, useParams, useNavigate } from "react-router-dom";
import SectionHeader from "../common/SectionHeader";
import api from "../../utils/api"; // Ensure api utility is imported
import { supabase } from "../supabaseClient";

const Products = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addingToCart, setAddingToCart] = useState({}); // State to track loading for each product
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // 'success' or 'error'
  const [quantity, setQuantity] = useState(1); // Keep for product detail page, if implemented separately
  const [selectedProduct, setSelectedProduct] = useState(null); // For product details modal
  const [selectedSize, setSelectedSize] = useState(null); // Selected size
  const [selectedColor, setSelectedColor] = useState(null); // Selected color

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.products.getAll({ category: categoryName });
        setProducts(response.data || []);
      } catch (err) {
        console.error("Error fetching products by category:", err);
        setError("Could not load products for this category. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (categoryName) {
      fetchProductsByCategory();
    } else {
      // Handle case where no category is specified (e.g., /products route)
      // You might want to fetch all products here or redirect.
      // For now, setting to empty and not loading.
      setProducts([]);
      setLoading(false);
    }
  }, [categoryName]);

  // Reset size and color when product changes
  useEffect(() => {
    if (selectedProduct) {
      setSelectedSize(null);
      setSelectedColor(null);
    }
  }, [selectedProduct]);

  // Check and sync backend token on mount
  useEffect(() => {
    const syncBackendToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (session && session.user) {
            // User is logged in via Supabase but no backend token
            // This means they need to login again to sync
            console.warn('Supabase session exists but no backend token. User should login again.');
          }
        } catch (error) {
          console.error('Error checking Supabase session:', error);
        }
      }
    };
    syncBackendToken();
  }, []);

  // Remaining functions like increaseQty, decreaseQty will be useful for product detail page
  // For product listing, typically you add entire product to cart, not adjust quantity here.
  // This will be refactored when integrating add to cart for product cards.
  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = async (productId) => {
    try {
      // Get and validate backend token
      // Use the getToken function from api utility which validates token format
      const token = localStorage.getItem('token');
      
      // Validate token - if it's too long, it's likely a Supabase token
      if (token && token.length > 300) {
        // Clear invalid Supabase token
        localStorage.removeItem('token');
        setToastMessage("Invalid token detected. Please logout and login again.");
        setToastType("error");
        setShowToast(true);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        return;
      }
      
      if (!token) {
        // Check if Supabase session exists
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          setToastMessage("Please login to add items to cart");
          setToastType("error");
          setShowToast(true);
          setTimeout(() => {
            navigate('/login');
          }, 2000);
          return;
        } else {
          // User is logged in via Supabase but no backend token
          // Try to get backend token by calling login with Supabase user info
          try {
            const { data: { user } } = await supabase.auth.getUser();
            // We can't get password, so we need user to login again
          } catch (error) {
            console.error('Error getting user:', error);
          }
          setToastMessage("Please logout and login again to sync your session");
          setToastType("error");
          setShowToast(true);
          setTimeout(() => {
            navigate('/login');
          }, 3000);
          return;
        }
      }
      
      setAddingToCart((prev) => ({ ...prev, [productId]: true }));
      await api.cart.add(productId, 1);
      
      // Close modal if open
      setSelectedProduct(null);
      setSelectedSize(null);
      setSelectedColor(null);
      
      // Redirect to checkout immediately after successful add
      navigate('/Billing', { replace: true });
    } catch (err) {
      console.error("Error adding to cart:", err);
      const errorMessage = err.message || "Failed to add product to cart.";
      if (errorMessage.includes('Authentication') || errorMessage.includes('token') || errorMessage.includes('Access token')) {
        setToastMessage("Please login to add items to cart");
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setToastMessage(errorMessage);
      }
      setToastType("error");
      setShowToast(true);
    } finally {
      setAddingToCart((prev) => ({ ...prev, [productId]: false }));
      setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <section className="mb-40 px-4 md:px-10">
          <div className="flex justify-center items-center h-64 mt-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading products for {decodeURIComponent(categoryName || 'all categories')}...</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <section className="mb-40 px-4 md:px-10">
          <div className="text-center py-16 mt-20">
            <p className="text-red-500 text-lg">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark"
            >
              Try Again
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="mb-40 px-4 md:px-10">
        <div className="m-4 md:m-8 flex flex-wrap gap-2 text-sm md:text-base">
          <Link to="/home" className="text-[#808080]">
            Home /
          </Link>
          <span className="text-black">
            {decodeURIComponent(categoryName || 'All Products')}
          </span>
        </div>

        <div className="mt-10 mb-16">
          <SectionHeader title={decodeURIComponent(categoryName || 'All Products')} />
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No products found for {decodeURIComponent(categoryName || 'this category')}.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative shadow-modern rounded-lg overflow-hidden">
                <img
                  src={product.image || "/src/assets/img/placeholder.png"}
                  alt={product.name}
                  className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedProduct(product)}
                  onError={(e) => {
                    e.target.src = "/src/assets/img/placeholder.png"; // Fallback image
                  }}
                />
                <div className="p-4">
                  <h1 className="font-semibold text-lg line-clamp-2">{product.name}</h1>
                  <p className="text-primary font-semibold text-xl mt-2">
                    {product.priceFormatted || `Rs. ${product.price?.toLocaleString('en-PK')}`}
                  </p>
                  {/* Add to Cart button */}
                  <button 
                    className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => handleAddToCart(product.id)}
                    disabled={addingToCart[product.id]}
                  >
                    {addingToCart[product.id] ? 'Adding...' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      {/* Toast Notification */}
      {showToast && (
        <div
          className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-lg text-white z-50
            ${toastType === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
          {toastMessage}
        </div>
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedProduct(null);
            setSelectedSize(null);
            setSelectedColor(null);
          }}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    setSelectedSize(null);
                    setSelectedColor(null);
                  }}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedProduct.image || "/src/assets/img/placeholder.png"}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = "/src/assets/img/placeholder.png";
                    }}
                  />
                </div>
                
                <div>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-primary">
                      {selectedProduct.priceFormatted || `Rs. ${selectedProduct.price?.toLocaleString('en-PK')}`}
                    </p>
                  </div>

                  {selectedProduct.rating && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < selectedProduct.rating ? "text-yellow-400" : "text-gray-300"}>
                            ★
                          </span>
                        ))}
                      </div>
                      {selectedProduct.reviews && (
                        <span className="text-gray-600">({selectedProduct.reviews} reviews)</span>
                      )}
                    </div>
                  )}

                  {selectedProduct.stock !== undefined && (
                    <p className={`mb-4 ${selectedProduct.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {selectedProduct.stock > 0 ? `In Stock (${selectedProduct.stock} available)` : 'Out of Stock'}
                    </p>
                  )}

                  {selectedProduct.sizes && (
                    <div className="mb-4">
                      <p className="font-semibold mb-2">Sizes:</p>
                      <div className="flex gap-2">
                        {selectedProduct.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-4 py-2 border-2 rounded transition ${
                              selectedSize === size
                                ? 'border-primary bg-primary text-white'
                                : 'border-gray-300 hover:border-primary hover:bg-primary hover:text-white'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      {selectedSize && (
                        <p className="text-sm text-gray-600 mt-2">Selected: {selectedSize}</p>
                      )}
                    </div>
                  )}

                  {selectedProduct.colors && (
                    <div className="mb-4">
                      <p className="font-semibold mb-2">Colors:</p>
                      <div className="flex gap-2">
                        {selectedProduct.colors.map((color) => {
                          const colorMap = {
                            'black': '#000000',
                            'red': '#FF0000',
                            'blue': '#0000FF',
                            'white': '#FFFFFF',
                            'pink': '#FFC0CB',
                            'green': '#008000',
                            'yellow': '#FFFF00',
                            'brown': '#A52A2A',
                            'gray': '#808080',
                            'navy blue': '#000080'
                          };
                          const colorValue = colorMap[color.toLowerCase()] || color.toLowerCase();
                          return (
                            <div
                              key={color}
                              onClick={() => setSelectedColor(color)}
                              className={`w-12 h-12 rounded-full border-3 cursor-pointer transition-all ${
                                selectedColor === color
                                  ? 'border-primary border-4 scale-110'
                                  : 'border-gray-300 border-2 hover:border-primary hover:scale-105'
                              }`}
                              style={{ backgroundColor: colorValue }}
                              title={color}
                            />
                          );
                        })}
                      </div>
                      {selectedColor && (
                        <p className="text-sm text-gray-600 mt-2">Selected: {selectedColor}</p>
                      )}
                    </div>
                  )}

                  <button
                    className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    onClick={() => {
                      if (selectedProduct.sizes && !selectedSize) {
                        alert('Please select a size');
                        return;
                      }
                      if (selectedProduct.colors && !selectedColor) {
                        alert('Please select a color');
                        return;
                      }
                      handleAddToCart(selectedProduct.id);
                      // Don't close modal immediately - let redirect happen
                    }}
                    disabled={addingToCart[selectedProduct.id] || (selectedProduct.stock !== undefined && selectedProduct.stock === 0)}
                  >
                    {addingToCart[selectedProduct.id] ? 'Adding...' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
