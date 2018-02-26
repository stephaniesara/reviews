import React from 'react';
import $ from '../../../node_modules/jquery';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ratings: {},
			reviews: []
		}
	}

	componentDidMount() {
		$.ajax({
			method: 'GET',
			url: 'http://localhost:3002/reviews/' + this.props.id,
			success: (result) => {
				console.log('get success!')
				console.log(result);
				var ratings = {
					review_count: result[0].b_review_count,
					overall: result[0].b_stars,
				};
				this.setState({
					ratings: ratings,
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
		return (
			<div>
			<Ratings ratings={this.state.ratings}/>
			<Reviews reviews={this.state.reviews}/>
			</div>
		)
	}
}

module.exports = App;