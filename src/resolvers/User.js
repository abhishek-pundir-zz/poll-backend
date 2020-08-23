function polls(parent, args, context) {
	return context.prisma.user.findOne({ where: { id: parent.id } }).polls();
}

module.exports = {
	polls,
};
