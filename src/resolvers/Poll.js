function author(parent, args, context) {
	return context.prisma.poll.findOne({ where: { id: parent.id } }).author();
}

function options(parent, args, context) {
	return context.prisma.poll.findOne({ where: { id: parent.id } }).options();
}

module.exports = {
	author,
	options,
};
