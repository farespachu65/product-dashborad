const API_URL = 'https://fakestoreapi.com/products';

/**
 * Fetches all products from the Fake Store API.
 * @returns {Promise<Array>} List of products
 */
export async function fetchProducts() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch products. Please try again later.');
  }
  return response.json();
}
