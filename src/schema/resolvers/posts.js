const axios = require('axios')

const resolvers = {
	posts: async (root, args) => {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
		return data
	},
	post: async (root, args) => {
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${args.id}`)
		return data
	}
}

module.exports = resolvers