import React from 'react';
import $ from '../../../node_modules/jquery';
import RatingsBar from './RatingsBar.jsx';

class RatingsBarList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const bars = [[5, 50], [4, 30], [3, 20], [2, 7], [1, 3]];
	
		return (
			<div className="bars text">
				{bars.map((elem, index) =>
					<RatingsBar
						key={index}
						label={elem[0]}
						percent={elem[1]}
						handleRatingSelect={ this.props.handleRatingSelect }
					/>
				)}
			</div>
		)
	}
}

export default RatingsBarList;