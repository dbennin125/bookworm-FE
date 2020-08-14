import { get, del, post, patch } from './request';

export const fetchBooks = (page = 1) => {
  return get(`/api/v1/books/?&page=${page}`);
};

export const fetchByID = (id) => {
  return get(`/api/v1/books/${id}`);
};

export const fetchDeleteBook = (id) => {
  return del(`/api/v1/books/${id}`);
};

export const createBook = (bookObject) => {
  return post('/api/v1/books/', bookObject);
};

export const fetchPatchBook = (id, bookObject) => {
  return patch(`/api/v1/books/${id}`, bookObject);
    
};
