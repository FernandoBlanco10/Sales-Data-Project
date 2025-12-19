import { DataTypes} from 'sequelize';
import sequelize from '../config/database.js';

const Product = sequelize.define('Product', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
});

export default Product;