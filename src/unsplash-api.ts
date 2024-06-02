import axios from 'axios';
axios.defaults.baseURL = 'https://api.unsplash.com';

export interface Image {
  alt: string;
  id: string;
  img: { small: string; regular: string };
}
interface Response {
  results: Image[];
  total: number;
  total_pages: number;
}
export async function searchImages(
  query: string,
  page: number
): Promise<Response> {
  const response = await axios.get<Response>('/search/photos', {
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
