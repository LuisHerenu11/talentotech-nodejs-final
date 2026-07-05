import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase.js';

// colección 'productos' 
const productsCollection = collection(db, 'productos');

export const ProductModel = {
    // Obtener todos los productos
    getAll: async () => {
        try {
            const snapshot = await getDocs(productsCollection);
            // retorna objeto complejo, mapeo para sacar solo el ID y la data útil
            const products = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            return products;
        } catch (error) {
            throw new Error('Error al obtener los productos de la base de datos');
        }
    },

    // Obtener un producto por ID
    getById: async (id) => {
        try {
            const docRef = doc(db, 'productos', id);
            const snapshot = await getDoc(docRef);
            if (!snapshot.exists()) {
                return null;
            }
            return { id: snapshot.id, ...snapshot.data() };
        } catch (error) {
            throw new Error('Error al obtener el producto');
        }
    },

    // Crear un nuevo producto
    create: async (productData) => {
        try {
            const docRef = await addDoc(productsCollection, productData);
            return { id: docRef.id, ...productData };
        } catch (error) {
            throw new Error('Error al crear el producto');
        }
    },

    // Eliminar un producto
    delete: async (id) => {
        try {
            const docRef = doc(db, 'productos', id);
            await deleteDoc(docRef);
            return true;
        } catch (error) {
            throw new Error('Error al eliminar el producto');
        }
    }
};