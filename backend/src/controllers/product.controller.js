import { Product } from '../models/index.js';

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error: error.message });
    }
};

export const getProducts = async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
};
