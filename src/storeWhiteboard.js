import { normalize, schema } from 'normalizr';

// denormalized/nested data we might get from a server
const originalData = {
  id: "1",
  name: "Chris' List",
  items: [
    {
    id: "1",
    name: "Arrows",
    link: "https://amazon.com",
    notes: "wooo"
  },
  {
    id: "2",
    name: "Shoes",
    link: "https://google.com",
    notes: "oh eyah baby"
  }
  ]
}

console.log("initial state:", originalData);

const item = new schema.Entity('item');
const list = new schema.Entity('list', {
  items: [item]
});

const storeWhiteboard = normalize(originalData, list);

const nonListOneItem = {
  id: "3",
  name: "Arrows",
  link: "https://amazon.com",
  notes: "wooo"
}

storeWhiteboard.entities.item[3] = nonListOneItem;

console.log("normalized state:", storeWhiteboard);

export default storeWhiteboard;
