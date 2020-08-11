export const fetchBooks = () => {
  return fetch('http://localhost:7890/api/v1/books')
    .then(res => res.json());
};

export const fetchByID = id => {
  return fetch(`http://localhost:7890/api/v1/books/${id}`)
    .then(res => res.json());
};
