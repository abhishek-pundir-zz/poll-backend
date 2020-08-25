function poll(parent, args, context) {
	return context.prisma.option.findOne({ where: { id: parent.id } }).poll();
}

function votes(parent, args, context) {
	return context.prisma.option.findOne({ where: { id: parent.id } }).votes();
}

module.exports = {
	poll,
	votes,
};
