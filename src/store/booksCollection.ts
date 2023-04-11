import {createSlice, createSelector, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';
import {data} from '../data/books'


export interface IBook {
	title: string;
	author?: string;
	description?: string;
	categories?: string;
	publisher?: string;
	published?: string;
	pages?: number;
	options?: string;
	rating?: number;
	isbn: string;
	isbn13?: string;
	subtitle: string;
}

export interface IBookState {
	data: IBook[];
	titleFilter: string | null
}

const initialState: IBookState = {
	data: data.books,
	titleFilter: null
};


export const booksCollection = createSlice({
	name: 'books',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<IBook>) => {
			state.data = [ ...state.data, action.payload]
		},
		titleFilter: (state, action: PayloadAction<string>) => {
			state.titleFilter = action.payload;
		},
	}
});

export const { add, titleFilter } = booksCollection.actions;

// select all books depending on text search
export const selectBooks = (state: RootState) => {
	if (!state.books.titleFilter) {
		return state.books.data;
	}
	const title = state.books.titleFilter.toLocaleLowerCase() as string
	return state.books.data.filter((book: IBook) => book.title.toLocaleLowerCase().includes(title) ||
		book.subtitle.toLocaleLowerCase().includes(title))
}
// select book by isbn
export const selectBooksByIsbn = createSelector(
	[
		state => state.books,
		(state, isbn) => isbn
	],
	(books, isbn) => {
		return books.data.find((book: IBook) => book.isbn === isbn)}
);


export default booksCollection.reducer;