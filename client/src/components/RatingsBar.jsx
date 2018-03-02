import React from 'react';
import $ from '../../../node_modules/jquery';
import { ProgressBar } from 'react-bootstrap';

class RatingsBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('handleClick');
		document.getElementById('sort').scrollIntoView();
		this.props.handleRatingSelect(this.props.label);
	}

	render() {
		const { label, percent } = this.props;

		return (
			<div className="bar-div">{ label } 
				<ProgressBar 
					className="bar" 
					now={ percent } 
					onClick={ this.handleClick }
				/>
			</div>
		)
	}
}

export default RatingsBar;