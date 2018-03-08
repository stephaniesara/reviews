import React from 'react';
import $ from 'jquery';
import ReactPaginate from 'react-paginate';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
// to use react-paginate with bootstrap4
// https://github.com/AdeleD/react-paginate/issues/182
import styles from '../styles.css';

const PageNavigator = ({ pageCount, handlePageClick, currPage }) => {
	return (
		<div id={ styles.pageNavigator }><ReactPaginate
			// className="pagination justify-content-center"
			className={ bootstrap.pagination }
			previousLabel={ "<" }
			forcePage={ currPage }
			nextLabel={ ">" }
			breakLabel={<a className= { bootstrap.pageLink }>...</a>}
			breakClassName={ `${ bootstrap.breakMe } ${ bootstrap.pageItem }` }
			pageCount={ pageCount }
			marginPagesDisplayed= { 1 }
			pageRangeDisplayed={ 3 }
			onPageChange={ handlePageClick }
			containerClassName={ `${ bootstrap.pagination } ${ bootstrap.pageItem }` }
			subContainerClassName={ `${ bootstrap.pages } ${ bootstrap.pagination } ${ bootstrap.pageItem }` }
			activeClassName={ bootstrap.active }
			disabledClassName={ bootstrap.disable }
			pageClassName={ bootstrap.pageItem }
			previousLinkClassName= {bootstrap.pageLink }
			nextLinkClassName= {bootstrap.pageLink }
			previousClassName={ bootstrap.pageItem }
			nextClassName={ bootstrap.pageItem }
			pageLinkClassName= {bootstrap.pageLink } />
		</div>
	)
}

export default PageNavigator;