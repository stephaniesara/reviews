import React from 'react';
import $ from '../../../node_modules/jquery';

// https://www.npmjs.com/package/react-dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// https://github.com/JedWatson/react-select
// import Select from 'react-select';
// import 'react-select/dist/react-select.css';

const options = [
	'Newest', 'Highest rating', 'Lowest rating'
]

// const defaultOption = options[0];

class Sort extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: options[0]
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(selected) {
		const { value } = selected; 
		this.setState({
			selected: value
		})
		this.props.handleSelectSort(value);
	}

	render() {
		// const { handleSelectSort } = this.props;
		
		return (
			<div>
			<Dropdown
				className="sort"
				options={ options }
				onChange={ this.handleChange }
				value={ this.state.selected }
				/>
			</div>
		)
	}
}

export default Sort;