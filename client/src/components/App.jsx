import React from 'react';
import $ from '../../../node_modules/jquery';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import Sort from './Sort.jsx';
import Filters from './Filters.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ratings: {},
			reviews: [],
			sort: 'Newest',
			filters: {}
		}
		this.handleSelectSort = this.handleSelectSort.bind(this);
		this.handleRatingSelect = this.handleRatingSelect.bind(this);
		this.clearFilter = this.clearFilter.bind(this);
	}

	componentDidMount() {
		const { iterator } = this.props;
		$.ajax({
			method: 'GET',
			url: 'http://localhost:3002/reviews/' + iterator,
			success: (result) => {
				console.log(result.ratings);
				console.log(result.reviews);
				this.setState({
					ratings: result.ratings, // restaurant data for given iterator
					reviews: result.reviews // reviews data for given iterator
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

	clearFilter() {
		console.log('clearFilter');
		this.setState({
			filters: {}
		})
	}

	render() {
		const { ratings, reviews, sort, filters } = this.state;

		return (
			<div>
				<Ratings 
					ratings={ ratings }
					handleRatingSelect={ this.handleRatingSelect }/>
				<Sort 
					handleSelectSort={ this.handleSelectSort }/>
				<Filters 
					filters={ filters }
					clearFilter={ this.clearFilter }/>
				<Reviews
					reviews={ reviews }
					sort={ sort }
					filters={ filters }/>
			</div>
		)
	}
}

export default App;