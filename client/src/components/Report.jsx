import React from 'react';
import $ from 'jquery';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/fontawesome-free-regular'

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
				<FontAwesomeIcon icon={ faFlag } />
				<div className="text-small">Report</div>
			</div>
		)
	}
}

export default Report;