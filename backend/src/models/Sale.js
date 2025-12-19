import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Sale = sequelize.define("Sale", {
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
});

export default Sale;