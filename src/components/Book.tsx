import React from 'react';
import { useParams } from 'react-router-dom';
import {selectBooksByIsbn} from "../store/booksCollection";
import {useSelector} from "react-redux";

/**
 * Book page component
 * @constructor
 */
function Book() {
	let { bookId } = useParams();
	const book = useSelector(state => selectBooksByIsbn(state, bookId));
	if (!book) {
		return <div>not found</div>
	}
	return (
		<div className="Book">
			<div className="container">
				<div className="card">
					<div className="card-body">
						<div className="row">
							<div className="col-lg-5 col-md-5 col-sm-6">
								<div className="white-box text-center"><img src="https://picsum.photos/430/600"
																														className="img-responsive"/></div>
								<div>
									<div>
										<i className="bi bi-person fa-3x"/>
										<span>{book.author}</span>
									</div>
									<i className="bi bi-star fa-3x stars"></i>
									<i className="bi bi-star fa-3x stars"></i>
									<i className="bi bi-star fa-3x stars"></i>
									<i className="bi bi-star fa-3x stars"></i>
									<i className="bi bi-star fa-3x stars"></i>
								</div>
							</div>
							<div className="col-lg-7 col-md-7 col-sm-6">
								<div className="book-info">
									<h3 className="card-title">{book.title}</h3>
									<h6 className="card-subtitle">{book.subtitle}</h6>
									<h4 className="box-title mt-5">Product description</h4>
									<p>{book.description}</p>
									<button className="btn btn-primary btn-rounded mr-1">Favorite</button>
									<button className="btn btn-primary btn-rounded">Share</button>

									<h3 className="box-title mt-5">Key Highlights</h3>
									<ul className="list-unstyled">
										<li>Year : { book.published.split('T')[0] }</li>
										<li>NUmber of pages : {book.pages}</li>
									</ul>
									<div>
										<span>Publisher: {book.publisher}</span>
									</div>
									<div>
										<span>ISBN-10: {book.isbn}</span>
									</div>
									<div>
										<span>ISBN-13: {book.isbn13}</span>
									</div>
									{/*<h2 className="mt-5">*/}
									{/*	$153<small className="text-success">(36%off)</small>*/}
									{/*</h2>*/}
									{/*<button className="btn btn-dark btn-rounded mr-1" data-toggle="tooltip" title=""*/}
									{/*				data-original-title="Add to cart">*/}
									{/*	<i className="fa fa-shopping-cart"></i>*/}
									{/*</button>*/}
									<div className="text-center">
										<button className="btn btn-bloc btn-lg btn-primary btn-rounded">Buy</button>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Book;
