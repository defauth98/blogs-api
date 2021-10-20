module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  // Ajuda da Bia Zidioti
/*  User.associate = (models) => {
    User.hasMany(models.BlogPost, { as: 'blogPost', foreignKey: 'userId' });
  }; */

  return User;
};
