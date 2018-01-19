import fetch from 'node-fetch';

export const allEmployees = () =>
  fetch('http://localhost:3010/employees')
    .then(res => res.json());

export const oneEmployeeById = id =>
  fetch(`http://localhost:3010/employees/${encodeURIComponent(id)}`)
    .then(res => res.json());

export const insertEmployee = employee =>
  fetch('http://localhost:3010/employees', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(employee),
  }).then(res => res.json());

export const allBooks = () =>
  fetch('http://localhost:3010/books')
    .then(res => res.json());

export const allAuthors = () =>
  fetch('http://localhost:3010/authors')
    .then(res => res.json());

export const oneBookById = id =>
  fetch(`http://localhost:3010/books/${encodeURIComponent(id)}`)
    .then(res => res.json());

export const oneAuthorById = id =>
  fetch(`http://localhost:3010/authors/${encodeURIComponent(id)}`)
    .then(res => res.json());

export const oneBookByISBN = isbn =>
  fetch(`http://localhost:3010/books?isbn=${encodeURIComponent(isbn)}`)
    .then(res => res.json())
    .then(books => books[0]);

export const allBooksByGenre = genre =>
  fetch(`http://localhost:3010/books?genre=${encodeURIComponent(genre)}`)
    .then(res => res.json());

export const allBooksByAuthorId = authorId =>
  fetch(`http://localhost:3010/books?authorId=${encodeURIComponent(authorId)}`)
    .then(res => res.json());
  
