export const fetchBooks = () => {
  return fetch('http://localhost:7890/api/v1/books')
    .then(res => res.json());
};
