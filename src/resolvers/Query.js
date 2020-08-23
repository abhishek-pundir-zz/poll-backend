async function user(parent, args, context, info) {
	const users = await context.prisma.user.findMany();
	return users;
}

async function poll(parent, args, context, info) {
	const result = await context.prisma.poll.findOne({
		where: {
			id: args.id,
		},
		include: {
			options: true,
		},
	});

	return result;
}

module.exports = {
	user,
	poll,
};
