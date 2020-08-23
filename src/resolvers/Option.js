function poll(parent, args, context) {
	return context.prisma.option.findOne({ where: { id: parent.id } }).poll();
}

module.exports = {
	poll,
};
