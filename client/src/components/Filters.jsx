import React from 'react';
import $ from '../../../node_modules/jquery';

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
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(e) {
		if (!this.state.disabled) {
			this.props.clearFilter();
		}
	}

	renderCheckbox() {
		return (
			<div className="filter" onClick={this.handleSelect}>
			<label>
				<Checkbox 
					defaultChecked
					onChange={this.handleSelect}
					disabled={this.state.disabled}/>
					{ this.props.filters.stars } stars
				</label>
				</div>
		)
	}
	

	render() {
		const { filters } = this.props;
		
		return (
			<div id="filters">
				<div className="header-text">Filters
					{ Object.keys(filters).length > 0 && this.renderCheckbox() }
				</div>
			</div>
		)
	}
}

export default Filters;