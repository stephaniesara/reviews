import React from 'react';
import $ from 'jquery';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';
import Sort from './Sort.jsx';
import Filters from './Filters.jsx';
import PageNavigator from './PageNavigator.jsx';
import moment from 'moment';
import styles from '../styles.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			review_count: {},
			details: {},
			reviews: [],
			sort: 'Newest',
			filter: 0,
			reviews_filtered: null,
			perPage: 20,
			offset: 0 
		}
		this._getPageCount = this._getPageCount.bind(this);
		this.handleSelectSort = this.handleSelectSort.bind(this);
		this.handleRatingSelect = this.handleRatingSelect.bind(this);
		this.clearFilter = this.clearFilter.bind(this);
		this.handlePageClick = this.handlePageClick.bind(this);
	}

	_getPageCount(review_count) {
		return Math.ceil(review_count / this.state.perPage);
	}

	componentDidMount() {
		const { iterator } = this.props;
		$.ajax({
			method: 'GET',
			url: '/reviews/' + iterator,
			success: (result) => {
				console.log(result);
				this.setState({
					review_count: result.review_count,
					details: result.details, // restaurant data for given iterator
					reviews: result.reviews, // reviews data for given iterator
					pageCount: this._getPageCount(result.review_count.overall)
				});
			},
			error: (err) => {
				console.log(err);
			}
		})
	}

	handleSelectSort(value) {
		console.log('handleSelectSort', value);

		const _sortFunc = {
			'Newest': (a, b) => {
				if (moment(a.date).isAfter(b.date)) {
					return -1;
				} else {
					return 1;
				}
			},
			'Highest rating': (a, b) => {
				return b.stars - a.stars;
			},
			'Lowest rating': (a, b) => {
				return a.stars - b.stars;
			}
		}

		const { sort, reviews } = this.state;
		if (sort !== value) {
			const comparator = _sortFunc[value];
			const sortedReviews = reviews.sort(comparator);
			this.setState({
				sort: value,
				reviews: sortedReviews,
				offset: 0
			})
		}
	}

	handleRatingSelect(label) {
		console.log('handleRatingSelect', label);
		const { reviews } = this.state;
		const reviews_filtered = reviews.filter(review => review.stars === label);
		this.setState({
			filter: label,
			reviews_filtered: reviews_filtered,
			pageCount: this._getPageCount(reviews_filtered.length),
			offset: 0
		})
	}

	handlePageClick(data) {
		console.log('handlePageClick', data);
		const offset = Math.ceil(data.selected * this.state.perPage);
		this.setState({
			offset: offset
		});
		document.getElementById('sort').scrollIntoView();
	}

	clearFilter() {
		console.log('clearFilter');
		const { reviews } = this.state;
		this.setState({
			filter: 0,
			reviews_filtered: null,
			offset: 0,
			pageCount: this._getPageCount(reviews.length)
		})
	}

	render() {
		const { details, filter, review_count, pageCount, offset, perPage } = this.state;

		const reviews = filter ? this.state.reviews_filtered : this.state.reviews;

		return (
			<div id={ styles.reviewsApp }>
				<Ratings 
					details={ details }
					review_count={ review_count }
					handleRatingSelect={ this.handleRatingSelect }/>
				<Sort 
					handleSelectSort={ this.handleSelectSort }/>
				<Filters 
					filter={ filter }
					clearFilter={ this.clearFilter }/>
				<ReviewList
					reviews={ reviews.slice(offset, offset + perPage) }
					/>
				<PageNavigator 
					pageCount={ pageCount }
					currPage={ offset / perPage }
					handlePageClick={ this.handlePageClick }/>
			</div>
		)
	}
}

export default App;