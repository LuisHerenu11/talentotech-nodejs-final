import { ProductModel } from '../models/product.model.js';

export const ProductService = {
    getAllProducts: async () => {
        return await ProductModel.getAll();
    },

    getProductById: async (id) => {
        const product = await ProductModel.getById(id);
        if (!product) {
            // Si el modelo devuelve null, lanza error que luego atrapamos en el controlador
            throw new Error('PRODUCT_NOT_FOUND');
        }
        return product;
    },

    createProduct: async (productData) => {
        // Validación: Asegura que el producto tenga datos esenciales
        if (!productData.nombre || !productData.precio) {
            throw new Error('MISSING_DATA');
        }
        return await ProductModel.create(productData);
    },

    deleteProduct: async (id) => {
        // Primero verifica que el producto exista antes de intentar borrarlo
        const existingProduct = await ProductModel.getById(id);
        if (!existingProduct) {
            throw new Error('PRODUCT_NOT_FOUND');
        }
        return await ProductModel.delete(id);
    }
};