const axios = require('axios').default;

async function fetchAllUsers() {
  const { data: users } = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );

  return users;
}

/**
 * Fetches user based on the userId from a remote API.
 * @async
 * @param {number} [userId] - The id of the usser to fetch
 * @returns {Promise<Object>} - A promise that resolves to an object of user.
 */
// Route to fetch user are https://jsonplaceholder.typicode.com/users/:userId
async function fetchUserById(userId) {
  const { data: user } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  return user;
}

module.exports = { fetchAllUsers, fetchUserById };
