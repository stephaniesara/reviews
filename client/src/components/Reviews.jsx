import React from 'react';
import $ from '../../../node_modules/jquery';
import Review from './Review.jsx';

class Reviews extends React.Component {
	constructor(props) {
		super(props);
		this.getSorted = this.getSorted.bind(this);
	}

	getSorted() {
		const { sort, reviews } = this.props;

		var comparator = sort === 'Highest rating' 
			? (a, b) => { return b.stars - a.stars; }
			: (a, b) => { return a.stars - b.stars; };

		return reviews.slice(0).sort(comparator);
	}

	render() {
		const { sort } = this.props;

		const reviews = sort === 'Newest' ? this.props.reviews : this.getSorted();

		return (
			<div className="reviews">
			{ reviews.map((review, index) => 
				<Review 
					review={ review } 
					key={ index }
				/>) }
			</div>
		)
	}
}

export default Reviews;