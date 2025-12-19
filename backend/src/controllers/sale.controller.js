import { Sale, Product } from '../models/index.js';

export const createSale = async (req, res) => {
    try {
        const { productId, cantidad } = req.body;   

        const product = await Product.findByPk(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        const precio = Number(product.precio);
        const total = precio * cantidad;

        const sale = await Sale.create({
            productId,
            cantidad,
            total,
            userId: req.userId
        });

        res.status(201).json(sale);
    } catch (error) {
        res.status(500).json({ message: 'Error creating sale', error: error.message });
    }
};

export const getSales = async (req, res) => {
    const sales = await Sale.findAll({
        include: [{ model: Product }, { model: User }]
    });
    res.json(sales);
};  
