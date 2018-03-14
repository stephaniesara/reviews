import React from 'react';
import $ from 'jquery';
import styles from '../styles.css';

// https://react-component.github.io/checkbox/examples/simple.html
import Checkbox from 'rc-checkbox';
// import 'rc-checkbox/assets/index.css';

class Filters extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: false
		}
		this.renderCheckbox = this.renderCheckbox.bind(this);
		this.clearFilter = this.clearFilter.bind(this);
	}

	clearFilter(e) {
		if (!this.state.disabled) {
			this.props.clearFilter();
		}
	}

	renderCheckbox() {
		return (
			<div className= { styles.filter } onClick={this.clearFilter}>
			<label>
				<Checkbox 
					defaultChecked
					onChange={this.handleSelect}
					disabled={this.state.disabled}/>
					{ this.props.filter } stars
				</label>
				</div>
		)
	}
	

	render() {
		const { filter } = this.props;
		
		return (
			<div id="filters">
				<div className= { styles.headerText }>Filters
					{ filter > 0 && this.renderCheckbox() }
				</div>
			</div>
		)
	}
}

export default Filters;