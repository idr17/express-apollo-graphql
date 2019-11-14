const books = [
	{
		id: 1,
		title: "Harry Potter and the Sorcerer's stone",
		author: 6,
	},
	{
		id: 2,
		title: 'Jurassic Park',
		author: 7,
	},
	{
		id: 3,
		title: 'Siapa suruh datang jakarta',
		author: 8,
	},
	{
		id: 4,
		title: 'Malang kota yang sejuk',
		author: 9,
	},
	{
		id: 5,
		title: 'Merantaulah sampai ke negri cina',
		author: 10,
	}
]
  
const authors = [
	{
			id: 6,
			name: 'J.K. Rowling'
	},
	{
			id: 7,
			name: 'Michael Crichton'
	},
	{
			id: 8,
			name: 'benyamin S'
	},
	{
			id: 9,
			name: 'singoedan'
	},
	{
			id: 10,
			name: 'Laksamana cheng ho'
	}
]

const resolvers = {
	Query: { 
		books: () => books,
		book: (root, args) => {
			
			const theBook = books.find(book => book.id === parseInt(args.id))
			if (!theBook) return

			const bookAuthor = authors.find(person => person.id === parseInt(theBook.author))
			
			const result = Object.assign({}, theBook)
			result.author = bookAuthor
			
			return result
		},
		authors: () => authors,
		author: (root, args) => {
			return authors.find(person => person.id === parseInt(args.id))
		}
	},
};

  module.exports = resolvers