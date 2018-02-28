import React from 'react';
import $ from '../../../node_modules/jquery';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import Sort from './Sort.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ratings: {},
			reviews: [],
			sort: 'Newest'
		}
		this.handleSelectSort = this.handleSelectSort.bind(this);
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
		console.log('selected!', value);
		this.setState({
			sort: value
		})
	}

	render() {
		const { ratings, reviews } = this.state;

		return (
			<div>
			<Ratings ratings={ ratings }/>
			<Sort handleSelectSort={ this.handleSelectSort }/>
			<Reviews
				reviews={ reviews }
				sort={ this.state.sort }/>
			</div>
		)
	}
}

export default App;