import React from 'react';
import $ from 'jquery';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCaretSquareUp } from '@fortawesome/fontawesome-free-regular'

class Helpful extends React.Component {
	constructor(props) {
		super(props);
		this.handleClickHelpful = this.handleClickHelpful.bind(this);
	}

	handleClickHelpful() {
		console.log('handleClickHelpful');
	}

	render() {
		return (
			<div 
				className="helpful" 
				onClick={ this.handleClickHelpful }>
				<FontAwesomeIcon icon={ faCaretSquareUp } />
				<div className="text-small">Helpful</div>
			</div>
		)
	}
}

export default Helpful;