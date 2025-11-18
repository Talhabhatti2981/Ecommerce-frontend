// API configuration and utility functions for backend communication

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Get auth token from localStorage
const getToken = () => {
  return localStorage.getItem('token');
};

// Set auth token in localStorage
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

// Remove auth token from localStorage
export const removeToken = () => {
  localStorage.removeItem('token');
};

// Generic fetch function with auth headers
const apiFetch = async (endpoint, options = {}) => {
  const token = getToken();
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// API methods
export const api = {
  // Auth endpoints
  auth: {
    register: async (userData) => {
      const response = await apiFetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      });
      if (response.data?.token) {
        setToken(response.data.token);
      }
      return response;
    },

    login: async (email, password) => {
      const response = await apiFetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      if (response.data?.token) {
        setToken(response.data.token);
      }
      return response;
    },

    logout: () => {
      removeToken();
    },

    getProfile: async () => {
      return apiFetch('/auth/profile');
    },
  },

  // Product endpoints
  products: {
    getAll: async (params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      const endpoint = queryString ? `/products?${queryString}` : '/products';
      return apiFetch(endpoint);
    },

    getWomenClothes: async (params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      const endpoint = queryString ? `/products/women?${queryString}` : '/products/women';
      return apiFetch(endpoint);
    },

    getById: async (id) => {
      return apiFetch(`/products/${id}`);
    },

    search: async (query) => {
      return apiFetch(`/products/search?q=${encodeURIComponent(query)}`);
    },

    create: async (productData) => {
      return apiFetch('/products', {
        method: 'POST',
        body: JSON.stringify(productData),
      });
    },

    update: async (id, productData) => {
      return apiFetch(`/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(productData),
      });
    },

    delete: async (id) => {
      return apiFetch(`/products/${id}`, {
        method: 'DELETE',
      });
    },
  },

  // Cart endpoints
  cart: {
    get: async () => {
      return apiFetch('/cart');
    },

    add: async (productId, quantity = 1) => {
      return apiFetch('/cart/add', {
        method: 'POST',
        body: JSON.stringify({ productId, quantity }),
      });
    },

    update: async (itemId, quantity) => {
      return apiFetch(`/cart/${itemId}`, {
        method: 'PUT',
        body: JSON.stringify({ quantity }),
      });
    },

    remove: async (itemId) => {
      return apiFetch(`/cart/${itemId}`, {
        method: 'DELETE',
      });
    },

    clear: async () => {
      return apiFetch('/cart', {
        method: 'DELETE',
      });
    },
  },

  // Wishlist endpoints
  wishlist: {
    get: async () => {
      return apiFetch('/wishlist');
    },

    add: async (productId) => {
      return apiFetch('/wishlist/add', {
        method: 'POST',
        body: JSON.stringify({ productId }),
      });
    },

    remove: async (itemId) => {
      return apiFetch(`/wishlist/${itemId}`, {
        method: 'DELETE',
      });
    },

    clear: async () => {
      return apiFetch('/wishlist', {
        method: 'DELETE',
      });
    },
  },

  // User endpoints
  user: {
    getProfile: async () => {
      return apiFetch('/user/profile');
    },

    updateProfile: async (userData) => {
      return apiFetch('/user/profile', {
        method: 'PUT',
        body: JSON.stringify(userData),
      });
    },

    deleteAccount: async () => {
      return apiFetch('/user/account', {
        method: 'DELETE',
      });
    },
  },

  // Health check
  health: async () => {
    return apiFetch('/health');
  },
};

export default api;

