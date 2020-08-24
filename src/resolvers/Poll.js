function author(parent, args, context) {
	return context.prisma.poll.findOne({ where: { id: parent.id } }).author();
}

function options(parent, args, context) {
	return context.prisma.poll.findOne({ where: { id: parent.id } }).options();
}

function votes(parent, args, context) {
	return context.prisma.poll.findOne({ where: { id: parent.id } }).votes();
}

module.exports = {
	author,
	options,
	votes,
};
