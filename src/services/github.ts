import axios from "axios";

export const searchUserRepos = async (
  user: string
): Promise<[unknown, unknown]> => {
  try {
    const results = [];
    const perPage = 100;
    let page = 1;
    let hasMore = true;
    while (hasMore) {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos?page=${page}&per_page=${perPage}`
      );
      if (response.data.length > 0) {
        results.push(...response.data);
        page += 1;
      }
      hasMore = response.data.length === perPage;
    }
    return [null, results];
  } catch (e) {
    return [e, null];
  }
};
