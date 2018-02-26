import React from 'react';
import $ from '../../../node_modules/jquery';

class Review extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			--------------------------------
			<div>{this.props.review.u_name}</div>
			<div>{this.props.review.r_stars}</div>
			<div>{this.props.review.r_date}</div>
			<div>{this.props.review.r_text}</div>
			</div>
		)
	}
}

module.exports = Review;