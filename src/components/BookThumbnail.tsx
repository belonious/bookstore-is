import React from 'react';
import {IBook} from "../store/booksCollection";
import {useNavigate} from "react-router-dom";

interface IBookThumbnailProps{
	book: IBook;
}

/**
 * BookThumbnai component
 * @param props
 * @constructor
 */
function BookThumbnail(props: IBookThumbnailProps) {
	const url = `book/${props.book.isbn}`
	const navigate = useNavigate();

	function handleClick() {
		navigate(url);
	}
	// randomm image
	const imgUri = `https://picsum.photos/500/400?${props.book.isbn}`;
	return (
		<div className="Products">
			<div className="card" style={{"cursor": "pointer"}} onClick={handleClick}>
				<img src={imgUri} className="card-img-top"
						 alt="Skyscrapers"/>
				<div className="card-body">
					<h5 className="card-title">{props.book.title}</h5>
					<p className="card-text">{props.book.subtitle}
					</p>
				</div>
			</div>
		</div>
	);
}

export default BookThumbnail;
