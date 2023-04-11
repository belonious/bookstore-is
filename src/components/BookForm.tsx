// import React from 'react';
import React, { useState } from "react";
import {useAppDispatch} from "../store/hooks";
import {add, IBook} from "../store/booksCollection";
import {useNavigate} from "react-router-dom";


interface BookFormData {
	title: string;
	subTitle: string;
	author: string;
	description: string;
	categories: string;
	publisher: string;
	year: string;
	pages: number;
	options: string;
	rating: number;
	isbn10: string;
	isbn13: string;
	formValid: boolean;
}

/**
 * BookForm component
 * @constructor
 */
const BookForm = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [error, setError] = useState<string>('title length should be between 10 - 100 characters')
	const [formData, setFormData] = useState<BookFormData>({
		formValid : false,
		title: "",
		subTitle: "",
		author: "",
		description: "",
		categories: "",
		isbn10: "",
		isbn13: "",
		options: "",
		pages: 0,
		publisher: "",
		rating: 0,
		year: ""
	});

	// example field value validation
	const validateForm = (formData: BookFormData): boolean => {
		return Object.entries(formData).every((field => {
			const [key, value] = field;
			switch (key) {
				case 'title':
					const titleValid = value.length >= 10 && value.length <= 100
					if(!titleValid){
						setError('title length should be between 10 - 100 characters');
						return false
					}
					return true
				case 'subTitle':
					const subTitleValid = value.length >= 5
					if(!subTitleValid){
						setError('sub title length must be at least 5 characters');
						return false
					}
					return true
				case 'isbn10':
					const isbn10Valid = value.match(/^[0-9]{10}$/)
					if(!isbn10Valid){
						setError('isbn 10 must have 10 digits');
						return false;
					}
					return true
				case 'isbn13':
					const isbn13Valid = value.match(/^[0-9]{13}$/)
					if(!isbn13Valid){
						setError('isbn 13 must have 13 digits');
						return false;
					}
					return true
				default:
					return true
			}
		}))
	}

	// handle form input
	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setFormData((prevState) => {
			const newState = {
				...prevState,
				[name]: value,
			}
			const formVlid = validateForm(newState)
			newState['formValid'] = formVlid
			return newState;
		});
	};

	// construct store Book from formdata
	const bookMapping = (book: BookFormData): IBook => {
		return {
			title: book.title,
			author: book.author,
			description: book.description,
			categories: book.categories,
			publisher: book.publisher,
			published: book.year,
			pages: book.pages,
			options: book.options,
			rating: book.rating,
			isbn: book.isbn10,
			isbn13: book.isbn13,
			subtitle: 'ddd',
		}
	}

	// handle submit action
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(add(bookMapping(formData)))
		const url = `/book/${formData.isbn10}`
		navigate(url)
	};

	const getErrorTpl = () => {
		if(formData.formValid){
			return  ''
		}
		return <div className="text-danger">Current form error: {error}</div>
	}

	return (

		<div className="container">
			<form onSubmit={handleSubmit}>
				<h3 className="text-center">Add new book</h3>
				{getErrorTpl()}
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-6">
						<div className="form-group">
							<label htmlFor="title">Title</label>
							<input
								required
								type="text"
								className="form-control"
								id="title"
								placeholder="Enter book title"
								name="title"
								value={formData.title}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="title">Subtitle</label>
							<input
								required
								type="text"
								className="form-control"
								id="subTitle"
								placeholder="Enter book sub title"
								name="subTitle"
								value={formData.subTitle}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="description">Description</label>
							<textarea
								className="form-control"
								id="description"
								placeholder="Enter book description"
								name="description"
								value={formData.description}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="categories">Categories</label>
							<textarea
								className="form-control"
								id="categories"
								placeholder="Enter book categories"
								name="categories"
								value={formData.categories}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="author">Author</label>
							<input
								type="text"
								className="form-control"
								id="author"
								placeholder="Enter book author"
								name="author"
								value={formData.author}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="publisher">Publisher</label>
							<input
								type="text"
								className="form-control"
								id="publisher"
								placeholder="Enter book publisher"
								name="publisher"
								value={formData.publisher}
								onChange={handleInputChange}
							/>
						</div>

					</div>
					<div className="col-lg-6 col-md-6 col-sm-6">
						<div className="form-group">
							<label htmlFor="year">Year</label>
							<input
								type="date"
								className="form-control"
								id="year"
								placeholder="Enter book year"
								name="year"
								value={formData.year}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="pages">Page number</label>
							<input
								type="number"
								className="form-control"
								id="pages"
								placeholder="Enter book page number"
								name="pages"
								value={formData.pages}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="rating">Rating</label>
							<input
								type="number"
								className="form-control"
								id="rating"
								placeholder="Enter book page number"
								name="rating"
								value={formData.rating}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="isbn">ISBN - 10</label>
							<input
								required
								type="text"
								className="form-control"
								id="isbn10"
								placeholder="Enter book isbn - 10"
								name="isbn10"
								value={formData.isbn10}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="isbn">ISBN - 13</label>
							<input
								type="text"
								className="form-control"
								id="isbn13"
								placeholder="Enter book isbn - 13"
								name="isbn13"
								value={formData.isbn13}
								onChange={handleInputChange}
							/>
						</div>
					</div>
				</div>
				<button type="submit" disabled={!formData.formValid} className="btn btn-primary">
					Add Book
				</button>
			</form>
		</div>
	);
};
export default BookForm;
