const express = require('express');
const { fetchPosts, fetchPostImages } = require('./posts.service');
const { fetchUserById } = require('../users/users.service');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await fetchPosts(req.query);

    const postsWithImages = await Promise.all(
      posts.map(async post => {
        //fetching images based on the postid
        const photosResponse = await fetchPostImages(post.id);

        //fetching the user based on the userid of the post
        const user = await fetchUserById(post.userId);
        
        const photos = photosResponse.data;
        return {
          ...post,
          user,
          images: photos.map(photo => ({ url: photo.thumbnailUrl })),
        };
      }),
    );

    res.json(postsWithImages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching posts or photos' });
  }
});

module.exports = router;
