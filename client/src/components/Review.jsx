import React from 'react';
import $ from '../../../node_modules/jquery';

// https://github.com/n49/react-stars
import ReactStars from 'react-stars';

// https://github.com/One-com/react-truncate
// import Truncate from 'react-truncate';

class Review extends React.Component {
	constructor(props) {
		super(props);
		this.maxChars = 250;
		this.state = {
			isExpanded: false
		}
		this.toggleTextClass = this.toggleTextClass.bind(this);
	}

	renderReadMoreButton() {
    return (
    	<div 
    		className="read-more"
    		onClick={this.toggleTextClass}>
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

		var toggledClass = isExpanded || text.length <= this.maxChars ? 'expanded' : 'collapsed';

		return (
			<div className="review">

			<div className="header">
			  { name }
			</div>

			<div className="sub-header">
				<div><ReactStars 
						count={ 5 } 
						value={ stars}
						color1={ "gray" }
						color2={ "#EF002F" }
						edit={ false }
				/></div>
				<div>{ (stars).toFixed(2) }</div>
				<div>{ date }</div>
			</div>

			<div className={ toggledClass }>
			  { text }
			</div>

      { text.length > this.maxChars &&
      	this.renderReadMoreButton()
      }

			<div className="report-helpful">
			  Report || Helpful
			</div>

			</div>
		)
	}
}

module.exports = Review;