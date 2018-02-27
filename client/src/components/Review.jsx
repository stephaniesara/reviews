import React from 'react';
import $ from '../../../node_modules/jquery';

// https://github.com/n49/react-stars
import ReactStars from 'react-stars';

//https://github.com/One-com/react-truncate

class Review extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		}
		this.toggleTextClass = this.toggleTextClass.bind(this);
	}

	toggleTextClass() {
		console.log('toggle!');
		this.setState({
				expanded: !this.state.expanded
		});
	}

	render() {
		// var {expanded} = this.state;
		var toggledClass = this.state.expanded ? 'expanded' : 'collapsed';
		return (
			<div className="review">

			
			<div className="header">
			{this.props.review.u_name}
			</div>

			<div className="sub-header">
				<div>
					<ReactStars 
					count={5} 
					value={this.props.review.r_stars}
					color1="gray"
					color2="red"
					edit={false}
					/>
				</div>
				<div>{(this.props.review.r_stars).toFixed(2)}</div>
				<div>{this.props.review.r_date}</div>
			</div>
			
			<div className={toggledClass}>
			{this.props.review.r_text}
			</div>
			<div className="read-more"
						onClick={this.toggleTextClass}>
						{this.state.expanded ? 'Read less' : 'Read more'}
			</div>

			<div className="report-helpful">Report || Helpful</div>
			</div>
		)
	}
}

module.exports = Review;