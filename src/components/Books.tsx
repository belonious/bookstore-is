import React from 'react';
import BookThumbnail from "./BookThumbnail";
import {useAppSelector, useAppDispatch} from "../store/hooks";
import {selectBooks, titleFilter} from "../store/booksCollection";

/**
 * Books page component
 * @constructor
 */
function Books() {
	const books = useAppSelector(selectBooks)
	const dispatch = useAppDispatch();
	return (
		<div className="Products">
			<div className="container">
				<h3 className="text-center">Search for books <span>(title, subtitle)</span></h3>
				<div className="input-group input-group-sm mb-3">
					<input
						onChange={(e) => dispatch(titleFilter(e.target.value))}
						type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
					placeholder="eg ecmascript 6"/>
				</div>
				<div className="row row-cols-3 g-3">
					{books.map(book => {
						return 	<div className="col" key={book.isbn}>
							<div className="card">
								<BookThumbnail book={book}/>
							</div>
						</div>
					})}
				</div>
			</div>
		</div>
	);
}

export default Books;
