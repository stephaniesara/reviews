import React from 'react';
import $ from 'jquery';
import Review from './Review.jsx';

const ReviewList = ( { reviews }) => {
	return (
		<div id="review-list">
		{ reviews.map((review, index) => 
			<Review 
				review={ review } 
				key={ index }
			/>) }
		</div>
	)
}

export default ReviewList;