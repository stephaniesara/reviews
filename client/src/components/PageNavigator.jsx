import React from 'react';
import $ from 'jquery';
import ReactPaginate from 'react-paginate';

const PageNavigator = ({ pageCount, handlePageClick }) => {
	return (
		<div id="page-navigator"><ReactPaginate
			previousLabel={ "<" }
			nextLabel={ ">" }
			breakLabel={<a href="">...</a>}
			breakClassName={ "break-me" }
			pageCount={ pageCount }
			marginPagesDisplayed= { 1 }
			pageRangeDisplayed={ 3 }
			onPageChange={ handlePageClick }
			containerClassName={ "pagination" }
			subContainerClassName={ "pages pagination" }
			activeClassName={ "active" } />
		</div>
	)
}

export default PageNavigator;