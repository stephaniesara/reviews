import React from 'react';
import $ from '../../../node_modules/jquery';

// https://github.com/n49/react-stars
import ReactStars from 'react-stars';

class Ratings extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// console.log(this.props.ratings);
		// const { stars } = this.props.ratings;
		const { ratings } = this.props;
		return (
			<div className="ratings">
				<div className="details">
					<div className="title">
						<h2>What { ratings.review_count } People Are Saying</h2>
						</div>
					<div className="sub-header">
						<ReactStars 
							count={ 5 } 
							value={ ratings.stars}
							color1={ "gray" }
							color2={ "#EF002F" }
							edit={ false } />
						<div>{ ratings.stars } based on recent ratings</div>
						</div>
				</div>
			</div>
		)
	}
}

export default Ratings;