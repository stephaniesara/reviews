import React from 'react';
import $ from '../../../node_modules/jquery';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		const { restaurant } = this.props;
		this.state = {
			ratings: {
				review_count: restaurant.review_count,
				stars: restaurant.stars
			},
			reviews: []
		}
	}

	componentDidMount() {
		const id = this.props.restaurant.id;
		$.ajax({
			method: 'GET',
			url: 'http://localhost:3002/reviews/' + id,
			success: (result) => {
				console.log('get success!')
				console.log(result);
				this.setState({
					reviews: result
				});
			},
			error: (err) => {
				console.log('get error!')
				console.log(err);
			}
		})
	}

	render() {
		const {ratings, reviews} = this.state;

		return (
			<div>
			<Ratings ratings={ ratings }/>
			<Reviews reviews={ reviews }/>
			</div>
		)
	}
}

module.exports = App;