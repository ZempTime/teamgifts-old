require("isomorphic-fetch");
import { normalize } from 'normalizr';
import { listSchema } from './schema';

export function loadList(id) {
  let url = `/lists/${id}`;
  return fetch(url, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(function(response) {
    return response.json()
  });
};
