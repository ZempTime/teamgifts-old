import { schema, arrayOf } from 'normalizr';

export const itemSchema = new schema.Entity('items');

export const listSchema = new schema.Entity('lists', {
  items: [ itemSchema ]
});
