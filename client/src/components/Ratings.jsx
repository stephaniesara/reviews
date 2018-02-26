import React from 'react';
import $ from '../../../node_modules/jquery';

class Ratings extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			<h2>What {this.props.ratings.review_count} People Are Saying</h2>
			<div>{this.props.ratings.overall}</div>
			</div>
		)
	}
}

module.exports = Ratings;