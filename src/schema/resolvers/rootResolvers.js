const { postQuery, postMutation } = require('./posts')
const { commentQuery } = require('./comments')

const resolvers = {
	Query: { ...postQuery, ...commentQuery },
	Mutation: { ...postMutation}
};

module.exports = resolvers