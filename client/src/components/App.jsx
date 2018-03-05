import React from 'react';
import $ from 'jquery';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';
import Sort from './Sort.jsx';
import Filters from './Filters.jsx';
import PageNavigator from './PageNavigator.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			review_count: {},
			details: {},
			reviews: [],
			sort: 'Newest',
			filters: {},
			perPage: 20,
			offset: 0 
		}
		this.handleSelectSort = this.handleSelectSort.bind(this);
		this.handleRatingSelect = this.handleRatingSelect.bind(this);
		this.clearFilter = this.clearFilter.bind(this);
		this.handlePageClick = this.handlePageClick.bind(this);
	}

	componentDidMount() {
		const { iterator } = this.props;
		$.ajax({
			method: 'GET',
			url: 'http://localhost:3002/reviews/' + iterator,
			success: (result) => {
				console.log(result);
				this.setState({
					review_count: result.review_count,
					details: result.details, // restaurant data for given iterator
					reviews: result.reviews, // reviews data for given iterator
					pageCount: Math.ceil(result.review_count.overall / this.state.perPage)
				});
			},
			error: (err) => {
				console.log(err);
			}
		})
	}

	handleSelectSort(value) {
		console.log('handleSelectSort', value);
		this.setState({
			sort: value
		})
	}

	handleRatingSelect(label) {
		console.log('handleRatingSelect', label);
		const newFilters = this.state.filters;
		newFilters.stars = label;
		this.setState({
			filters: newFilters
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
		this.setState({
			filters: {}
		})
	}

	render() {
		const { details, reviews, sort, filters, review_count, pageCount, offset, perPage } = this.state;

		return (
			<div>
				<Ratings 
					details={ details }
					review_count={ review_count }
					handleRatingSelect={ this.handleRatingSelect }/>
				<Sort 
					handleSelectSort={ this.handleSelectSort }/>
				<Filters 
					filters={ filters }
					clearFilter={ this.clearFilter }/>
				<ReviewList
					reviews={ reviews.slice(offset, offset + perPage) }
					sort={ sort }
					filters={ filters }/>
				<PageNavigator 
					pageCount={ pageCount }
					handlePageClick={ this.handlePageClick }/>
			</div>
		)
	}
}

export default App;