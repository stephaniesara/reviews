import React from 'react';
import $ from 'jquery';

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
				<div><i className="far fa-caret-square-up"></i></div>
				<div className="text-small">Helpful</div>
			</div>
		)
	}
}

module.exports = Helpful;