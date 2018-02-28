import React from 'react';
import $ from '../../../node_modules/jquery';
import Review from './Review.jsx';

class Reviews extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {reviews} = this.props;

		return (
			<div className="reviews">
			{ reviews.map((review, index) => 
				<Review 
					review={ review } 
					key={ index } />
			) }
			</div>
		)
	}
}

module.exports = Reviews;