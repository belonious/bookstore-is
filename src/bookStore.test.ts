import { store } from './store/store';
import {add, IBook} from './store/booksCollection';

// example test for store functionality
test('add a book', () => {
	const title = 'awesome title';
	let books = store.getState().books;
	const oldBooksCount = books.data.length;

	store.dispatch(add({ isbn: '278362736783', title, subtitle: 'example subtitle' }));
	books = store.getState().books;
	const booksCountDifference = books.data.length - oldBooksCount;
	expect(booksCountDifference).toBe(1);
	const newBook = books.data.find((book: IBook) => book.title === title)
	expect(newBook).toBeDefined()
});