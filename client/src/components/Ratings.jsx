import React from 'react';
import $ from '../../../node_modules/jquery';

class Ratings extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { ratings } = this.props;
		
		return (
			<div>
			<h2>What { ratings.review_count } People Are Saying</h2>
			</div>
		)
	}
}

module.exports = Ratings;