import React from 'react';
import $ from 'jquery';
import RatingsBar from './RatingsBar.jsx';
import styles from '../styles.css';

class RatingsBarList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { review_count } = this.props;
		return (
			<div className={ `${styles.bars} ${styles.text} `}>
				{[5, 4, 3, 2, 1].map((label, index) =>
					<RatingsBar
						key={ index }
						label={ label }
						percent={ Math.floor(review_count[label] / review_count.overall * 100) }
						handleRatingSelect={ this.props.handleRatingSelect }
					/>
				)}
			</div>
		)
	}
}

export default RatingsBarList;