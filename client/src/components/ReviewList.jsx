import React from 'react';
import $ from 'jquery';
import Review from './Review.jsx';

class ReviewList extends React.Component {
	constructor(props) {
		super(props);
		this.getSorted = this.getSorted.bind(this);
	}

	getSorted() {
		const { sort, reviews } = this.props;

		var comparator = sort === 'Highest rating' 
			? (a, b) => { return b.stars - a.stars; }
			: (a, b) => { return a.stars - b.stars; };

		return reviews.slice().sort(comparator);
	}

	render() {
		const { sort, filters } = this.props;

		const reviews = sort === 'Newest' ? this.props.reviews : this.getSorted();

		return (
			<div id="reviews">
			{ reviews.map((review, index) => 
				<Review 
					review={ review } 
					key={ index }
					filters={ filters }
				/>) }
			</div>
		)
	}
}

export default ReviewList;