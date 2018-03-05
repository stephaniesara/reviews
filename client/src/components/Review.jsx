import React from 'react';
import $ from 'jquery';
import ReactStars from 'react-stars';
import moment from 'moment';
import Report from './Report.jsx';
import Helpful from './Helpful.jsx';

class Review extends React.Component {
	constructor(props) {
		super(props);
		this.maxChars = 280;
		this.today = new Date();
		this.state = {
			isExpanded: false
		}
		this.toggleTextClass = this.toggleTextClass.bind(this);
		this.renderStars = this.renderStars.bind(this);
	}

	toggleTextClass() {
		this.setState({
			isExpanded: !this.state.isExpanded
		});
	}

	renderStars() {
		const { stars, date } = this.props.review;

		const dateDisplay = moment(date).add(7, 'd') > this.today 
			? moment(date, 'YYYYMMDD').fromNow() 
			: 'on ' + moment(date, 'YYYYMMDD').format('LL');

		return (
			<div className="stars-section">
				<ReactStars 
					count={ 5 } 
					value={ stars}
					color1={ "gray" }
					color2={ "#EF002F" }
					edit={ false } />
				<div className="text-small star-rating">{ stars.toFixed(1) }</div>
				<div className="text-small" id="dined">Dined { dateDisplay }</div>
			</div>
		)
	}

	renderReadMoreButton() {
		const { text } = this.props.review;
		if (text.length <= this.maxChars) {
			return ( <div></div> );
		}
    return (
    	<div 
    		className="read-more"
    		onClick={ this.toggleTextClass }>
    		{ this.state.isExpanded ? '- Read less' : '+ Read more' }
    	</div>
   	);
	}

	render() {
		const { stars, text, name } = this.props.review;
		const { isExpanded } = this.state;
		const { filters } = this.props;

		const toggledClass = isExpanded || text.length <= this.maxChars ? 'expanded' : 'collapsed';

		if (Object.keys(filters).length !== 0 && filters.stars !== stars) {
			return null;
		}
		return (
			<div className="review">
				<div className="header-text">{ name }</div>
				{ this.renderStars() }
				<div className={`text ${ toggledClass } `}>{ text }</div>
	      <div className="review-footer">
	      	{ this.renderReadMoreButton() }
					<div className="report-helpful">
						<Report />
						<Helpful />
					</div>
				</div>
			</div>
		)
	}
}

export default Review;