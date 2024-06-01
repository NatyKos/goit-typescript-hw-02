import axios from 'axios';
axios.defaults.baseURL = 'https://api.unsplash.com';
// export const searchImages = async ({ query }) => {
//   const response = await axios.get(
//     `/search?query=${query}?client_id=b6JjLPzkkZXNskYS5KykhEtYH6pk7zZQ5ClQhEkRkF4?`
//   );
//   return response.data.hits;
// };
export async function searchImages(query, page) {
  const response = await axios.get('/search/photos', {
    params: {
      client_id: 'b6JjLPzkkZXNskYS5KykhEtYH6pk7zZQ5ClQhEkRkF4',
      image_type: 'photo',
      query: query,
      page: page,
      per_page: 15,
    },
  });
  return response.data;
}
