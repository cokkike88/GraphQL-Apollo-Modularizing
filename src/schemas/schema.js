import { importSchema } from 'graphql-import';
import { mergeTypes } from 'merge-graphql-schemas';
import schema from './file';

// const typeDefs = importSchema('src/schemas/schema.graphql');

const schemas = importSchema('src/schemas/schema.graphql');

const types = [
    schema,
    schemas,
  ];
    
 const typeDefs = mergeTypes(types);


export { typeDefs };