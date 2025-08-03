import axios from "axios";

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users`, {
    params: { q: query.trim() },
  });

  // Fetch details for each user
  const detailedUsers = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return { ...user, ...userDetails.data };
    })
  );

  return { items: detailedUsers };
};
