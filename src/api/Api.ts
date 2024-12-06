import axios from 'axios';
import { Product, Productlist, ReviewList } from './types/type';

const API_BASE_URL = 'https://test-api.nova-techs.com';
const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Something went wrong.');
    }
  
    return response.json();
};
  
// Products
export const fetchProducts = async (params?: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    sort?: string;
    tags?: string[];
    use?: 'for_rent' | 'for_sale';
    minimumQuantity?: number;
    sellingPrice?: number;
    quantityOnHand?: number;
    reservedQuantity?: number;
    discount?: number;
  }) => {
    const query = new URLSearchParams(params as Record<string, string>).toString();
    return apiFetch(`/products${query ? `?${query}` : ''}`);
  };
  
  // src/api/api.ts

// Base API URL


// API Functions



export const fetchProductById = async (productId: string) => {
  return apiFetch(`/products/${productId}`);
};

export const createProduct = async (product: Product) => {
  return apiFetch('/products', {
    method: 'POST',
    body: JSON.stringify(product),
  });
};

export const updateProduct = async (productId: string, updates: Partial<Product>) => {
  return apiFetch(`/products/${productId}`, {
    method: 'PATCH',
    body: JSON.stringify(updates),
  });
};

export const deleteProduct = async (productId: string) => {
  return apiFetch(`/products/${productId}`, {
    method: 'DELETE',
  });
};

// Reviews
export const fetchReviewsByProductId = async (productId: string) => {
  return apiFetch(`/reviews/${productId}`);
};

export const postReview = async (review: { productId: string; rating: number; comment: string }) => {
  return apiFetch('/reviews', {
    method: 'POST',
    body: JSON.stringify(review),
  });
};





// Base URL for the API

// Create an Axios instance
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Optional: Set a timeout for API calls
  headers: {
    'Content-Type': 'application/json',
  },
});

// Centralized API Calls
export const api = {
  async ProductLists(): Promise<Productlist> {
    try {
      const response = await fetchProducts()
      console.log(response.data)
      return response.data; 
    } catch (error: any) {
      throw new Error(
        `An error occurred while listing products! ${error.message}`
      );
    }
  },
  async product(id:string): Promise<Product> {
    try {
      const response = await fetchProductById(id)
      console.log("singleProduct" ,response)
      return response; 
    } catch (error: any) {
      throw new Error(
        `An error occurred while your product! ${error.message}`
      );
    }
  },
  async ReviewLists(productId:string): Promise<ReviewList>{
    try {
      const response = await fetchReviewsByProductId(productId)
      console.log( "products Review", response)
      return response
    } catch (error: any) {
      throw new Error(
        `An error occurred while listing products! ${error.message}`
      );
    }
  }
};
