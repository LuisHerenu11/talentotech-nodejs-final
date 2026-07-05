import { ProductService } from '../services/product.service.js';

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductService.getAllProducts();
        return res.status(200).json(products);
    } catch (error) {
        // Fallo en nuestro servicio externo de datos
        return res.status(500).json({ error: 'Error interno del servidor al obtener productos' });
    }
};

// GET producto por ID
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductService.getProductById(id);
        return res.status(200).json(product);
    } catch (error) {
        if (error.message === 'PRODUCT_NOT_FOUND') {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// POST Crear producto
export const createProduct = async (req, res) => {
    try {
        const productData = req.body;
        const newProduct = await ProductService.createProduct(productData);
        return res.status(201).json(newProduct);
    } catch (error) {
        if (error.message === 'MISSING_DATA') {
            // La petición contiene errores (faltan datos)
            return res.status(400).json({ error: 'Faltan datos obligatorios (nombre, precio)' }); 
        }
        return res.status(500).json({ error: 'Error al intentar crear el producto' });
    }
};

// Eliminar producto
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await ProductService.deleteProduct(id);
        return res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        if (error.message === 'PRODUCT_NOT_FOUND') {
            return res.status(404).json({ error: 'Producto no encontrado, no se puede eliminar' });
        }
        return res.status(500).json({ error: 'Error interno del servidor al eliminar' });
    }
};