import React from 'react';
import $ from '../../../node_modules/jquery';
// https://github.com/n49/react-stars
import ReactStars from 'react-stars';

class RatingsDetails extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { overall } = this.props;
	
		return (
			<div className="details">
				<div className="text">Reviews can only be made by diners who have eaten at this restaurant</div>
				<div className="stars-section text-small">
					<ReactStars 
						count={ 5 } 
						value={ overall }
						color1={ "gray" }
						color2={ "#EF002F" }
						edit={ false } />
					<div>{ overall } based on recent ratings</div>
				</div>
				<div className="sub-ratings text-small">Food || Service || Ambience || Value</div>
				<div className="noise text-small">Noise * Moderate</div>
				<div className="recommended text-small">x% of people would recommend to a friend</div>
			</div>
		)
	}
}

export default RatingsDetails;