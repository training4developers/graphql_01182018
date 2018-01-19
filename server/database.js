import fetch from 'node-fetch';


export const getAllEmployees = () => {
  return fetch('http://localhost:3010/employees').then(res => res.json());
};