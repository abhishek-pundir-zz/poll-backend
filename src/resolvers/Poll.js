function author(parent, args, context) {
	return context.prisma.link.findOne({ where: { id: parent.id } }).author();
}

module.exports = {
	author,
};
