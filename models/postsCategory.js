module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {}, { timestamp: false });
//   PostsCategory.associate = (models) => {
//     models.blogPost.belongsToMany(models.categories, {
//       as: 'categories',
//       through: PostsCategory,
//       foreignKey: 'postId',
//       otherKey: 'categoryId',
//     });
//   };
//   PostsCategory.associate = (models) => {
//     models.category.belongsToMany(models.blogPosts, {
//       as: 'blogPosts',
//       through: PostsCategory,
//       foreignKey: 'categoryId',
//       otherKey: 'postId',
//     });
//   };
  return PostsCategory;
};