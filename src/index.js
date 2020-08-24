const { GraphQLServer } = require("graphql-yoga");
const { PrismaClient } = require("@prisma/client");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Poll = require("./resolvers/Poll");
const Option = require("./resolvers/Option");
const Vote = require("./resolvers/Vote");
const typeDefs = `./src/schema.graphql`;

const prisma = new PrismaClient();

const resolvers = {
	Query,
	Mutation,
	User,
	Poll,
	Option,
	Vote,
};

const server = new GraphQLServer({
	typeDefs,
	resolvers,
	context: (request) => ({
		...request,
		prisma,
	}),
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
