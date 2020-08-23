const { GraphQLServer } = require("graphql-yoga");
const { PrismaClient } = require("@prisma/client");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const typeDefs = `./src/schema.graphql`;

const prisma = new PrismaClient();

const resolvers = {
	Query,
	Mutation,
};

const server = new GraphQLServer({
	typeDefs,
	resolvers,
	context: (req) => ({
		...req,
		prisma,
	}),
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
