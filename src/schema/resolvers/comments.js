const axios = require('axios')

const query = {
	comments: async (root, args) => {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments')
		return data
	},
	comment: async (root, { postid }) => {
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`)
		return data
	},
	commentbyid: async (root, { commentid }) => {
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?id=${commentid}`)
		return data[0]
	}
}

module.exports = {
	commentQuery: query
}