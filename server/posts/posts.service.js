const axios = require('axios').default;

/**
 * Fetches posts from a remote API.
 * @async
 * @param {Object} [params] - The parameters for fetching posts.
 * @param {number} [params.start=0] - The start index of posts to fetch.
 * @param {number} [params.limit=10] - The maximum number of posts to fetch.
 * @returns {Promise<Array>} - A promise that resolves to an array of posts.
 */
async function fetchPosts(params) {
  const { start = 0, limit = 10 } = params || {};
  const { data: posts } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?limit`,
    {
      params: {
        _start: start,
        _limit: limit,
      },
    },
  );

  return posts;
}

/**
 * Fetches images based on the postId from a remote API.
 * @async
 * @param {number} [id] - The id of the images to fetch
 * @returns {Promise<Array>} - A promise that resolves to an array of images.
 */
async function fetchPostImages(id) {
  const data = await axios.get(
    `https://jsonplaceholder.typicode.com/albums/${id}/photos`,
  );
  return data;
}

module.exports = { fetchPosts, fetchPostImages };
