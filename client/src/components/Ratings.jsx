import React from 'react';
import $ from 'jquery';
import RatingsBarList from './RatingsBarList.jsx';
import RatingsDetails from './RatingsDetails.jsx';
import styles from '../styles.css';

class Ratings extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { details, review_count } = this.props;

		if (Object.keys(details).length === 0) {
			return null;
		}

		return (
			<div className={ styles.ratings }>
				<div className={ styles.title }>
					<h2>What { review_count.overall } People Are Saying</h2>
				</div>
				<div className={ styles.headerText }>Overall ratings and reviews</div>
				<div className={ styles.subTitle }>
					<RatingsDetails details={ details } />
					<RatingsBarList
						review_count={ review_count }
						handleRatingSelect={ this.props.handleRatingSelect } />
				</div>
			</div>
		)
	}
}

export default Ratings;