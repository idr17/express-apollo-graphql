const axios = require('axios')

const resolvers = {
	comments: async (root, args) => {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments')
		return data
	},
	comment: async (root, args) => {
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${args.postid}`)
		return data
	},
	commentbyid: async (root, args) => {
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?id=${args.commentid}`)
		return data[0]
	}
}

module.exports = resolvers