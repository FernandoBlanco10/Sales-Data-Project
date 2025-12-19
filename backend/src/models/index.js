import User from './User.js';
import Product from './Product.js';
import Sale from './Sale.js';

User.hasMany(Sale, { foreignKey: 'userId' });
Sale.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Sale, { foreignKey: 'productId' });
Sale.belongsTo(Product, { foreignKey: 'productId' });

export { User, Product, Sale };