import React from 'react';
import $ from '../../../node_modules/jquery';
import RatingsBarList from './RatingsBarList.jsx';
import RatingsDetails from './RatingsDetails.jsx';

class Ratings extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { ratings } = this.props;

		return (
			<div className="ratings">
				<div className="title">
					<h2>What { ratings.review_count } People Are Saying</h2>
				</div>
				<div className="header-text">Overall ratings and reviews</div>
				<div className="sub-title">
					<RatingsDetails overall={ ratings.stars } />
					<RatingsBarList handleRatingSelect={ this.props.handleRatingSelect } />
				</div>
			</div>
		)
	}
}

export default Ratings;