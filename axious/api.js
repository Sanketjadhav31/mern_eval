import axios from 'axios';
import { } from 'productsatribute';

export const getProducts = async () => {
    try {
        const response = await axios.get('http://localhost:5000/products');
        
        return  response.data.sendStatus(200).json( {message: "product fetch successfull"}).status(200);

        
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
export const getProductDetails = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;
    }
};
export const createProduct = async (product) => {
    try {
        const response = await axios.post('http://localhost:5000/products', product);
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};
export const deleteProduct = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/products/${id}`);
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};
export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`http://localhost:5000/products/${id}`, product);
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};