const postService = require('../services/postService');

module.exports = {
  async create(req, res) {
    const { title, content, categoryIds } = req.body;
    const token = req.headers.authorization;

    const response = await postService.createPost(
      token,
      title,
      content,
      categoryIds,
    );

    const responseMessage = response.post ? response.post : { message: response.message };

     return res.status(response.status).json(responseMessage);
  },

  async update(req, res) {
    const { title, content, categoryIds } = req.body;
    const { id } = req.params;
    const token = req.headers.authorization;
    const post = { title, content, categoryIds };

    try {
      const response = await postService.updatePost(token, id, post);

      if (response === undefined) {
        return res.status(400).json({ message: 'Mano?' });
      }

      const responseMessage = response.updatedPost 
      ? response.updatedPost : { message: response.message };

      return res.status(response.status).json(responseMessage);
    } catch (err) {
      return {
        status: 401,
        message: err.message,
      };
    }
  },

  async index(req, res) {
    const { id } = req.params;
    const token = req.headers.authorization;
    const { q } = req.query;

    if (id) {
      const response = await postService.show(token, id);

      return res
        .status(response.status)
        .json(response.post ? response.post : { message: response.message });
    }

    console.log(q);

    const response = await postService.index(token, q);

    return res
      .status(response.status)
      .json(response.allPosts ? response.allPosts : { message: response.message });
  },

  async delete(req, res) {
    const { id } = req.params;
    const token = req.headers.authorization;

    try {
      const response = await postService.deletePost(token, id);

      return res
        .status(response.status)
        .json(response.message && { message: response.message });
    } catch (err) {
      return {
        status: 401,
        message: err.message,
      };
    }
  },
};
