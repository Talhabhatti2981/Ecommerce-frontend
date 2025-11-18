import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SectionHeader from '../common/SectionHeader';

const WomenClothes = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addingToCart, setAddingToCart] = useState({});

  useEffect(() => {
    fetchWomenClothes();
  }, []);

  const fetchWomenClothes = async () => {
    try {
      setLoading(true);
      const response = await api.products.getWomenClothes();
      setProducts(response.data || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching women clothes:', err);
      setError('Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (productId, event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      setAddingToCart(prev => ({ ...prev, [productId]: true }));
      
      const response = await api.cart.add(productId, 1);
      
      // Show success message (you can add a toast notification here)
      alert('Product added to cart successfully!');
      
      console.log('Added to cart:', response);
    } catch (err) {
      console.error('Error adding to cart:', err);
      if (err.message.includes('token') || err.message.includes('Access token')) {
        alert('Please login to add items to cart');
        // Redirect to login page
        window.location.href = '/login';
      } else {
        alert('Failed to add product to cart. Please try again.');
      }
    } finally {
      setAddingToCart(prev => ({ ...prev, [productId]: false }));
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading products...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={fetchWomenClothes}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="mb-40 px-4 md:px-10">
        <div className="mt-20 mb-16">
          <SectionHeader title="Women's Clothes" />
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No products available at the moment.</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative group cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full object-cover h-64 rounded-lg shadow-modern"
                    onError={(e) => {
                      e.target.src = '/assets/img/women.jpeg'; // Fallback image
                    }}
                  />
                  <button
                    onClick={(e) => handleAddToCart(product.id, e)}
                    disabled={addingToCart[product.id]}
                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {addingToCart[product.id] ? 'Adding...' : 'Add to Cart'}
                  </button>
                </div>
                <h1 className="font-semibold pt-4 text-lg">{product.name}</h1>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-primary font-semibold text-lg">
                    {product.priceFormatted || `Rs. ${product.price.toLocaleString('en-PK')}`}
                  </span>
                  {product.rating && (
                    <>
                      {Array.from({ length: Math.floor(product.rating || 0) }).map((_, i) => (
                        <img
                          key={i}
                          src="/src/assets/img/star.png"
                          alt="star"
                          className="w-4 h-4"
                        />
                      ))}
                      {Array.from({ length: 5 - Math.floor(product.rating || 0) }).map((_, i) => (
                        <img
                          key={i}
                          src="/src/assets/img/e-star.png"
                          alt="empty star"
                          className="w-4 h-4"
                        />
                      ))}
                      <span className="text-sm text-gray-600">
                        ({product.reviews || 0})
                      </span>
                    </>
                  )}
                </div>
                {product.sizes && product.sizes.length > 0 && (
                  <div className="mt-2 text-xs text-gray-500">
                    Sizes: {product.sizes.join(', ')}
                  </div>
                )}
                {product.stock !== undefined && (
                  <div className="mt-2">
                    {product.stock > 0 ? (
                      <span className="text-sm text-green-600">In Stock ({product.stock})</span>
                    ) : (
                      <span className="text-sm text-red-600">Out of Stock</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default WomenClothes;

