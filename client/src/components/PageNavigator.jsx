import React from 'react';
import $ from 'jquery';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
// to use react-paginate with bootstrap4
// https://github.com/AdeleD/react-paginate/issues/182

const PageNavigator = ({ pageCount, handlePageClick }) => {
	return (
		<div id="page-navigator"><ReactPaginate
			className="pagination justify-content-center"
			previousLabel={ "<" }
			nextLabel={ ">" }
			breakLabel={<a className="page-link">...</a>}
			breakClassName={ `break-me page-item` }
			pageCount={ pageCount }
			marginPagesDisplayed= { 1 }
			pageRangeDisplayed={ 3 }
			onPageChange={ handlePageClick }
			containerClassName={ `pagination page-item` }
			subContainerClassName={ `pages pagination page-item` }
			activeClassName={ "active" }
			disabledClassName={ "disable" }
			pageClassName="page-item"
			previousLinkClassName="page-link"
			nextLinkClassName="page-link"
			previousClassName="page-item"
			nextClassName="page-item"
			pageLinkClassName="page-link" />
		</div>
	)
}

export default PageNavigator;