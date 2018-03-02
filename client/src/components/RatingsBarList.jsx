import React from 'react';
import $ from '../../../node_modules/jquery';
import RatingsBar from './RatingsBar.jsx';

class RatingsBarList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { review_count } = this.props;
		return (
			<div className="bars text">
				{[5, 4, 3, 2, 1].map((label, index) =>
					<RatingsBar
						key={index}
						label={label}
						percent={review_count[label]}
						handleRatingSelect={ this.props.handleRatingSelect }
					/>
				)}
			</div>
		)
	}
}

export default RatingsBarList;