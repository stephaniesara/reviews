import React from 'react';
import $ from '../../../node_modules/jquery';
// https://github.com/n49/react-stars
import ReactStars from 'react-stars';

class RatingsDetails extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { details } = this.props;
	
		return (
			<div className="details">
				<div className="text">Reviews can only be made by diners who have eaten at this restaurant</div>
				<div className="stars-section text-small">
					<ReactStars 
						count={ 5 } 
						value={ details.stars }
						color1={ "gray" }
						color2={ "#EF002F" }
						edit={ false } />
					<div className="star-rating">{ details.stars.toFixed(1) }</div>
					<div>based on recent ratings</div>
				</div>
				<div className="sub-ratings text-small">Food {details.stars_food} || Service {details.stars_service} || Ambience {details.stars_ambience} || Value {details.stars_value}</div>
				<div className="noise text-small">Noise * {details.noise}</div>
				<div className="recommended text-small">{details.recommend}% of people would recommend to a friend</div>
			</div>
		)
	}
}

export default RatingsDetails;