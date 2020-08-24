function poll(parent, args, context) {
	return context.prisma.vote.findOne({ where: { id: parent.id } }).poll();
}

function option(parent, args, context) {
	return context.prisma.vote.findOne({ where: { id: parent.id } }).option();
}

module.exports = {
	poll,
	option,
};
