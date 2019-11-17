const axios = require('axios')

const query = {
	posts: async (root, args) => {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
		return data
	},
	post: async (root, { id }) => {
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		return data
	}
}

const mutation = {
	createpost: async (root, { title, body, userId }) => {
		const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', {
			'title': title,
			'body': body,
			'userId': userId
		})
		return data
	},
	updatepost: async (root, { id, title, body, userId }) => {
		const result = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			'title': title,
			'body': body,
			'userId': userId
		})
		return result.data
	},
	deletepost: async (root, {id}) => {
		const { status } = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
		return {
			'message': status === 200 ? `${id} Delete Success.` : `Delete Failed`,
			'status': status
		}
	}
}

module.exports = {
	postQuery: query,
	postMutation: mutation
}