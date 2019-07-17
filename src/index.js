import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schemas/schema';
import resolvers from './resolvers';

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({app});
app.listen(7000, () => console.log('El servidor esta funcionando http://localhost:7000'+ server.graphqlPath));