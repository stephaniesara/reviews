import React from 'react';
import $ from 'jquery';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/fontawesome-free-regular'
import styles from '../styles.css';

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
				className={ styles.report } 
				onClick={ this.handleClickReport }>
				<FontAwesomeIcon icon={ faFlag } />
				<div className={ styles.textSmall }>Report</div>
			</div>
		)
	}
}

export default Report;