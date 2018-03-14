import React from 'react';
import $ from 'jquery';
import ReactStars from 'react-stars';
import moment from 'moment';
import Report from './Report.jsx';
import Helpful from './Helpful.jsx';
import styles from '../styles.css';

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
			<div className={ styles.starsSection }>
				<ReactStars 
					count={ 5 } 
					value={ stars}
					color1={ "gray" }
					color2={ "#EF002F" }
					edit={ false } />
				<div className={ `${styles.textSmall} ${styles.starRating}` }>{ stars.toFixed(1) }</div>
				<div className={ styles.textSmall }>Dined { dateDisplay }</div>
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
    		className={ styles.readMore }
    		onClick={ this.toggleTextClass }>
    		{ this.state.isExpanded ? '- Read less' : '+ Read more' }
    	</div>
   	);
	}

	render() {
		const { stars, text, name } = this.props.review;
		const { isExpanded } = this.state;
		// const { filters } = this.props;

		const toggledClass = isExpanded || text.length <= this.maxChars ? `${styles.expanded}` : `${styles.collapsed}`;

		// if (Object.keys(filters).length !== 0 && filters.stars !== stars) {
		// 	return null;
		// }
		return (
			<div className={ styles.review }>
				<div className={ styles.headerText }>{ name }</div>
				{ this.renderStars() }
				<div className={ `${ styles.text } ${ toggledClass } `}>{ text }</div>
	      <div className={ styles.reviewFooter }>
	      	{ this.renderReadMoreButton() }
					<div className={ styles.reportHelpful }>
						<Report />
						<Helpful />
					</div>
				</div>
			</div>
		)
	}
}

export default Review;