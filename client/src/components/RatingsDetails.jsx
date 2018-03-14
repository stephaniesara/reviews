import React from 'react';
import $ from 'jquery';
// https://github.com/n49/react-stars
import ReactStars from 'react-stars';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSignal } from '@fortawesome/fontawesome-free-solid'
import { faThumbsUp } from '@fortawesome/fontawesome-free-regular'
import styles from '../styles.css';

class RatingsDetails extends React.Component {
	constructor(props) {
		super(props);
		this.renderStars = this.renderStars.bind(this);
		this.renderSubratings = this.renderSubratings.bind(this);
		this.renderNoise = this.renderNoise.bind(this);
		this.renderRecommend = this.renderRecommend.bind(this);
	}

	renderStars() {
		const { stars } = this.props.details;
		return (
			<div className={ `${styles.starsSection} ${styles.textSmall}` }>
				<ReactStars 
					count={ 5 } 
					value={ stars }
					color1={ "gray" }
					color2={ "#EF002F" }
					edit={ false } />
				<div className={ styles.starRating }>{ stars.toFixed(1) }</div>
				<div>based on recent ratings</div>
			</div>
		)
	}

	renderSubratings() {
		const { details } = this.props;
		const Subrating = ({ rating, label }) => {
			return (
				<div className={ styles.subrating }>
					<span className={ styles.subratingLarge }>{rating}</span>
					<span className={ styles.subratingSmall }>{label}</span>
				</div>
			)
		}
		return (
			<div id={ styles.subratingList }>
				<Subrating rating={ details.stars_food } label="Food" />
				<div className={ styles.vl }></div>
				<Subrating rating={ details.stars_service } label="Service" />
				<div className={ styles.vl }></div>
				<Subrating rating={ details.stars_ambience } label="Ambience" />
				<div className={ styles.vl }></div>
				<Subrating rating={ details.stars_value } label="Value" />
			</div>
		)
	}

	renderNoise(iconStyle, divStyle) {
		return (
			<div style={divStyle}>
				<div><FontAwesomeIcon 
					icon={ faSignal }
					style={iconStyle} /> </div>
				<div className={ `${styles.noise} ${styles.subratingSmall}` }>
					<b>Noise</b> · {this.props.details.noise}</div>
			</div>
		)
	}

	renderRecommend(iconStyle, divStyle) {
		return (
			<div style={ divStyle }>
				<div><FontAwesomeIcon 
					icon={ faThumbsUp }
					style={iconStyle} /> </div>
				<div className={ `${styles.recommended} ${styles.subratingSmall}` }>
					<b>{this.props.details.recommend}% of people</b> would recommend it to a friend</div>
			</div>
		)
	}

	render() {
		const { details } = this.props;
		const divStyle = {
			'display': 'flex',
			'flexDirection': 'row'
		}
		const iconStyle = {
			'marginRight': '10px'
		}
	
		return (
			<div className={ styles.details }>
				<div className={ styles.text }>Reviews can only be made by diners who have eaten at this restaurant</div>
				{ this.renderStars() }
				{ this.renderSubratings() }
				{ this.renderNoise(iconStyle, divStyle) }
				{ this.renderRecommend(iconStyle, divStyle) }
			</div>
		)
	}
}

export default RatingsDetails;