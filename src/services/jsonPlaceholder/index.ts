import api from '../api';

export const getUsers = () => {
  return api.get('/users');
}

export const getPosts = () => {
  return api.get('/posts');
}