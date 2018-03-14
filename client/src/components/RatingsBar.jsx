import React from 'react';
import $ from 'jquery';
import styles from '../styles.css';

class RatingsBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleEnter = this.handleEnter.bind(this);
		this.handleLeave = this.handleLeave.bind(this);
	}

	handleClick() {
		console.log('handleClick');
		document.getElementById('sort').scrollIntoView();
		this.props.handleRatingSelect(this.props.label);
	}

	handleEnter() {
		this.setState({
			hover: true
		})
	}

	handleLeave() {
		this.setState({
			hover: false
		})
	}

	render() {
		const { label, percent } = this.props;
		const { hover } = this.state;

		const innerWidth = {
			width: `${percent}%`
		}

		return (
			<div className={ styles.bar } 
				onMouseEnter={ this.handleEnter }
				onMouseLeave={ this.handleLeave }>
				<div className={ hover ? styles.hoverText : '' }>{ label }</div>
				<div 
					className={ hover ? `${styles.barOuter} ${styles.hoverBar}` : styles.barOuter }
					onClick={ this.handleClick }>
					<div 
						className={ styles.barInner }
						style={ innerWidth }></div>
				</div>
			</div>
		)
	}
}

export default RatingsBar;