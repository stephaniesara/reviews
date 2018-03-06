import React from 'react';
import $ from 'jquery';

class Report extends React.Component {
	constructor(props) {
		super(props);
		this.handleClickReport = this.handleClickReport.bind(this);
	}

	handleClickReport() {
		console.log('handleClickReport');
	}

	render() {
		return (
			<div 
				className="report" 
				onClick={ this.handleClickReport }>
				<div><i className='far fa-flag'></i></div>
				<div className="text-small">Report</div>
			</div>
		)
	}
}

export default Report;