module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTERGER, primaryKey: true },
    name: DataTypes.STRING,
  }, { tableName: 'Categories', timestamp: false });
  return Category;
};