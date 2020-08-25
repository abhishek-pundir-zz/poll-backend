function newVoteSubscribe(parent, args, context, info) {
	return context.pubsub.asyncIterator("NEW_VOTE");
}

/** Wrapper object for the newVote subcription */
const newVote = {
	subscribe: newVoteSubscribe,
	resolve: (payload) => {
		return payload;
	},
};

module.exports = {
	newVote,
};
