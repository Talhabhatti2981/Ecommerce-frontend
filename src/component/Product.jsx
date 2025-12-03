import { Link, useNavigate } from "react-router-dom";
import SectionHeader from "./common/SectionHeader";
import { useState, useEffect } from "react";
import api from "../utils/api";
import { supabase } from "./supabaseClient";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addingToCart, setAddingToCart] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.products.getAll({ limit: 8 });
        setProducts(response.data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Reset size and color when product changes
  useEffect(() => {
    if (selectedProduct) {
      setSelectedSize(null);
      setSelectedColor(null);
    }
  }, [selectedProduct]);

  const handleAddToCart = async (productId) => {
    try {
      // Check if backend token exists (required for API calls)
      const token = localStorage.getItem('token');
      if (!token) {
        // Check if Supabase session exists
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          alert('Please login to add items to cart');
          navigate('/login');
          return;
        } else {
          // User is logged in via Supabase but no backend token
          alert('Please login again to sync your session');
          navigate('/login');
          return;
        }
      }
      
      setAddingToCart(productId);
      await api.cart.add(productId, 1);
      
      // Close modal if open
      setSelectedProduct(null);
      setSelectedSize(null);
      setSelectedColor(null);
      
      // Redirect to checkout immediately after successful add
      navigate('/Billing', { replace: true });
    } catch (err) {
      console.error('Error adding to cart:', err);
      const errorMessage = err.message || 'Failed to add product to cart. Please try again.';
      if (errorMessage.includes('Authentication') || errorMessage.includes('token') || errorMessage.includes('Access token')) {
        alert('Please login to add items to cart');
        navigate('/login');
      } else {
        alert(errorMessage);
      }
    } finally {
      setAddingToCart(null);
    }
  };

  if (loading) {
    return (
      <section className="mb-24 py-10 px-4 sm:px-6 lg:px-20">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mb-24 py-10 px-4 sm:px-6 lg:px-20">
        <div className="text-center py-16">
          <p className="text-red-500 text-lg">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-24 py-10 px-4 sm:px-6 lg:px-20">
      <div>
        <SectionHeader
          title="Our Products"
          subtitle="Explore Our Products"
          className="mt-12"
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item, index) => (
            <div key={item.id || index}>
              <div className="relative group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full object-cover h-48 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedProduct(item)}
                  onError={(e) => {
                    e.target.src = 'src/assets/img/placeholder.png';
                  }}
                />
                <button
                  onClick={() => handleAddToCart(item.id)}
                  disabled={addingToCart === item.id}
                  className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-50"
                >
                  {addingToCart === item.id ? 'Adding...' : 'Add to Cart'}
                </button>
              </div>
              <h1 className="font-semibold pt-4">{item.name}</h1>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-primary font-semibold">
                  {item.priceFormatted || `Rs. ${item.price?.toLocaleString('en-PK')}`}
                </span>
                {item.rating && Array.from({ length: item.rating }).map((_, i) => (
                  <img
                    key={i}
                    src="src/assets/img/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
                {item.reviews && (
                  <span className="text-sm text-gray-600">
                    ({item.reviews})
                  </span>
                )}
              </div>
              {/* Optional color dots */}
              {index >= 4 && item.colors && (
                <div className="relative mt-2 flex gap-1">
                  {item.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="rounded-full h-4 w-4 cursor-pointer"
                      style={{ backgroundColor: color.toLowerCase() }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/search"
            className="text-white px-8 py-3 cursor-pointer bg-primary hover:bg-primary-600 rounded-lg shadow-modern transition-all transform hover:scale-105 inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>

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
                    disabled={addingToCart === selectedProduct.id || (selectedProduct.stock !== undefined && selectedProduct.stock === 0)}
                  >
                    {addingToCart === selectedProduct.id ? 'Adding...' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
