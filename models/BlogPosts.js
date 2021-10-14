module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  }, { timestamps: false });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' });
    BlogPosts.belongsToMany(models.Categories, 
      { foreignKey: 'postId', through: 'PostsCategories', as: 'posts' });
  };

  return BlogPosts;
};