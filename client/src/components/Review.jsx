import React from 'react';
import $ from '../../../node_modules/jquery';

// https://github.com/n49/react-stars
import ReactStars from 'react-stars';

// https://github.com/One-com/react-truncate
// import Truncate from 'react-truncate';

import classNames from 'classnames';

class Review extends React.Component {
	constructor(props) {
		super(props);
		this.maxChars = 270;
		this.state = {
			isExpanded: false
		}
		this.toggleTextClass = this.toggleTextClass.bind(this);
	}

	renderReadMoreButton() {
    return (
    	<div 
    		className="read-more"
    		onClick={ this.toggleTextClass }>
    		{ this.state.isExpanded ? '- Read less' : '+ Read more' }
    	</div>
   );
	}

	toggleTextClass() {
		this.setState({
			isExpanded: !this.state.isExpanded
		});
	}

	render() {
		const { stars, date, text, name } = this.props.review;
		const { isExpanded } = this.state;
		const { filters } = this.props;

		var toggledClass = isExpanded || text.length <= this.maxChars ? 'expanded' : 'collapsed';

		if (Object.keys(filters).length !== 0 && filters.stars !== stars) {
			return null;
		}

		return (
			<div className="review">
				<div className="header-text">{ name }</div>
				<div className="stars-section">
					<ReactStars 
							count={ 5 } 
							value={ stars}
							color1={ "gray" }
							color2={ "#EF002F" }
							edit={ false } />
					<div className="text-small">{ (stars).toFixed(1) }</div>
					<div className="text-small">{ date }</div>
				</div>
				<div className={classNames({text: true, [toggledClass]: true})}>{ text }</div>

	      { text.length > this.maxChars &&
	      	this.renderReadMoreButton() }

				<div className="report-helpful">
				  Report || Helpful </div>
			</div>
		)
	}
}

export default Review;