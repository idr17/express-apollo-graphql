const posts = require('./posts')
const comments = require('./comments')

const resolvers = {
	Query: { ...posts, ...comments },
};

module.exports = resolvers