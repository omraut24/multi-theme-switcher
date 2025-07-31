const API_BASE_URL = 'https://fakestoreapi.com';

export class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export const apiService = {
  async testAPI() {
    try {
      console.log('Testing API connectivity...');
      const response = await fetch(`${API_BASE_URL}/products?limit=1`);
      console.log('Test response status:', response.status);
      
      if (!response.ok) {
        throw new ApiError(response.status, `API test failed with status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Test data:', data);
      return { success: true, data };
    } catch (error) {
      console.error('API test failed:', error);
      return { success: false, error: error.message };
    }
  },

  async getProducts(limit) {
    try {
      let url = `${API_BASE_URL}/products`;
      if (limit && typeof limit === 'number' && limit > 0) {
        url += `?limit=${limit}`;
      }
      
      console.log('Fetching products from:', url);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Add timeout
        signal: AbortSignal.timeout(10000), // 10 second timeout
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text().catch(() => 'Unknown error');
        throw new ApiError(response.status, `Failed to fetch products: ${errorText}`);
      }
      
      const data = await response.json();
      console.log('Data received:', data);
      
      if (!Array.isArray(data)) {
        throw new ApiError(500, 'Invalid data format received from API - expected array');
      }
      
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      
      if (error.name === 'AbortError') {
        throw new ApiError(408, 'Request timeout - please try again');
      }
      
      if (error instanceof ApiError) {
        throw error;
      }
      
      throw new ApiError(500, `Failed to fetch products: ${error.message}`);
    }
  },

  async getProduct(id) {
    try {
      if (!id || typeof id !== 'number') {
        throw new ApiError(400, 'Invalid product ID provided');
      }
      
      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(10000),
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => 'Unknown error');
        throw new ApiError(response.status, `Failed to fetch product: ${errorText}`);
      }

      const data = await response.json();
      
      if (!data || typeof data !== 'object') {
        throw new ApiError(500, 'Invalid product data received from API');
      }

      return data;
    } catch (error) {
      console.error('Error fetching product:', error);
      
      if (error.name === 'AbortError') {
        throw new ApiError(408, 'Request timeout - please try again');
      }
      
      if (error instanceof ApiError) {
        throw error;
      }
      
      throw new ApiError(500, `Failed to fetch product: ${error.message}`);
    }
  },

  async getCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}/products/categories`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(10000),
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => 'Unknown error');
        throw new ApiError(response.status, `Failed to fetch categories: ${errorText}`);
      }

      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new ApiError(500, 'Invalid categories data received from API');
      }

      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      
      if (error.name === 'AbortError') {
        throw new ApiError(408, 'Request timeout - please try again');
      }
      
      if (error instanceof ApiError) {
        throw error;
      }
      
      throw new ApiError(500, `Failed to fetch categories: ${error.message}`);
    }
  },
}; 