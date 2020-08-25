const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET, getUserId } = require("../utils");

async function user(parent, args, context, info) {
	const newUser = await context.prisma.user.create({
		data: {
			mail: args.mail,
			name: args.name,
		},
	});

	return newUser;
}

async function poll(parent, args, context, info) {
	const userId = getUserId(context);

	const newPoll = await context.prisma.poll.create({
		data: {
			question: args.question,
			options: {
				create: args.options,
			},
			author: { connect: { id: userId } },
		},
	});

	return newPoll;
}

async function signup(parent, args, context, info) {
	const password = await bcrypt.hash(args.password, 10);

	const user = await context.prisma.user.create({
		data: { ...args, password },
	});

	const token = jwt.sign({ userId: user.id }, APP_SECRET);

	return {
		token,
		user,
	};
}

async function login(parent, args, context, info) {
	const user = await context.prisma.user.findOne({
		where: {
			mail: args.mail,
		},
	});

	if (!user) {
		throw new Error("No such user found");
	}

	const valid = await bcrypt.compare(args.password, user.password);

	if (!valid) {
		throw new Error("Invalid credentials");
	}

	const token = jwt.sign({ userId: user.id }, APP_SECRET);

	return {
		token,
		user,
	};
}

async function vote(parent, args, context, info) {
	const newVote = await context.prisma.vote.create({
		data: {
			poll: { connect: { id: args.pollId } },
			option: { connect: { id: args.optionId } },
		},
	});
	context.pubsub.publish("NEW_VOTE", newVote);

	return newVote.id;
}

module.exports = {
	user,
	poll,
	signup,
	login,
	vote,
};
