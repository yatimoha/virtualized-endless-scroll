import axios from 'axios';

export type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsData = PostData[];

export const getPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    return console.log(error);
  }
}
