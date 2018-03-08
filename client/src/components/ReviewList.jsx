import React from 'react';
import $ from 'jquery';
import Review from './Review.jsx';
import styles from '../styles.css';

const ReviewList = ( { reviews }) => {
	return (
		<div id={ styles.reviewList }>
		{ reviews.map((review, index) => 
			<Review 
				review={ review } 
				key={ index }
			/>) }
		</div>
	)
}

export default ReviewList;