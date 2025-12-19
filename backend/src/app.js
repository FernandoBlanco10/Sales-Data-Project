import express from 'express';
import dotenc from 'dotenv';
import sequelize from './config/database.js';
import './models/index.js';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import saleRoutes from './routes/sale.routes.js';

dotenc.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/sales', saleRoutes);

sequelize.sync({ alter: true })
    .then(() =>
        console.log('Database synchronized'))
    .catch(err => 
        console.error('Error synchronizing database:', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});