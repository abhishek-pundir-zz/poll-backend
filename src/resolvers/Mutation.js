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
	const newPoll = await context.prisma.poll.create({
		data: {
			question: args.question,
			options: {
				create: args.options,
			},
			author: { connect: { id: args.userId } },
		},
	});

	return newPoll;
}

module.exports = {
	user,
	poll,
};
