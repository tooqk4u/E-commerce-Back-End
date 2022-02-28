// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define id columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  // define product name colums
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  // define price column
  price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
    }
  },
  // define stock column
  stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
            validate: {
                isNumeric: true
            }
  },
  // define category_id column
  category_id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // turn on auto increment
      autoIncrement: true,
      // this is the equivalent of SQL's `NOT NULL` option
          allowNull: false,
          references: {
                model: "category",
                key: "id"
            }
      
      
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
