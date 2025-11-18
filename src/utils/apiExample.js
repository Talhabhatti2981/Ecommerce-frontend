// Example usage of the API utility
// You can use this as a reference for how to use the API in your components

import api from './api';

// Example: Login user
export const exampleLogin = async () => {
  try {
    const response = await api.auth.login('user@example.com', 'password123');
    console.log('Login successful:', response.data);
    // Token is automatically stored in localStorage
    return response.data;
  } catch (error) {
    console.error('Login failed:', error.message);
    throw error;
  }
};

// Example: Register user
export const exampleRegister = async () => {
  try {
    const response = await api.auth.register({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    });
    console.log('Registration successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error.message);
    throw error;
  }
};

// Example: Get all products
export const exampleGetProducts = async () => {
  try {
    const response = await api.products.getAll({ category: 'Electronics', limit: 10 });
    console.log('Products:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error.message);
    throw error;
  }
};

// Example: Search products
export const exampleSearchProducts = async (query) => {
  try {
    const response = await api.products.search(query);
    console.log('Search results:', response.data);
    return response.data;
  } catch (error) {
    console.error('Search failed:', error.message);
    throw error;
  }
};

// Example: Add to cart
export const exampleAddToCart = async (productId, quantity = 1) => {
  try {
    const response = await api.cart.add(productId, quantity);
    console.log('Added to cart:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to add to cart:', error.message);
    throw error;
  }
};

// Example: Add to wishlist
export const exampleAddToWishlist = async (productId) => {
  try {
    const response = await api.wishlist.add(productId);
    console.log('Added to wishlist:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to add to wishlist:', error.message);
    throw error;
  }
};

// Example: Get user profile
export const exampleGetProfile = async () => {
  try {
    const response = await api.user.getProfile();
    console.log('User profile:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch profile:', error.message);
    throw error;
  }
};

// Example: Logout
export const exampleLogout = () => {
  api.auth.logout();
  console.log('Logged out successfully');
  // Redirect to login page or clear user state
};

