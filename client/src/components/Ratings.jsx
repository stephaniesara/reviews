import React from 'react';
import $ from '../../../node_modules/jquery';
import RatingsBar from './RatingsBar.jsx';

// https://github.com/n49/react-stars
import ReactStars from 'react-stars';

class Ratings extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { ratings } = this.props;
		const bars = [[5, 50], [4, 30], [3, 20], [2, 7], [1, 3]];

		return (
			<div className="ratings">

				<div className="title">
					<h2>What { ratings.review_count } People Are Saying</h2>
					</div>

				<div className="header-text">
					Overall ratings and reviews
					</div>

				<div className="sub-title">
					<div className="details">
						<div className="text">Reviews can only be made by diners who have eaten at this restaurant</div>

						<div className="stars-section text-small">
							<ReactStars 
								count={ 5 } 
								value={ ratings.stars}
								color1={ "gray" }
								color2={ "#EF002F" }
								edit={ false } />
							<div>{ ratings.stars } based on recent ratings
							</div>
						</div>
						<div className="sub-ratings text-small">Food || Service || Ambience || Value</div>
						<div className="noise text-small">Noise * Moderate</div>
						<div className="recommended text-small">x% of people would recommend to a friend</div>
					</div>

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
					</div>

			</div>
		)
	}
}

export default Ratings;