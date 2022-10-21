import 'reflect-metadata';
import path from 'node:path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { StationsResolvers } from './resolvers/stations';
import { PlanetsResolvers } from './resolvers/planets';
import { RechargesResolvers } from './resolvers/recharges';
import { UsersResolvers } from './resolvers/users';

async function main() {
    const schema = await buildSchema({
        resolvers: [
            StationsResolvers,
            PlanetsResolvers,
            RechargesResolvers,
            UsersResolvers,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    });
    const server = new ApolloServer({ schema });

    const { url } = await server.listen();
    console.log(`HTTP Server running on ${url}`);
}

main();
