import React from 'react';
import $ from 'jquery';

// https://www.npmjs.com/package/react-dropdown
import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

// https://github.com/JedWatson/react-select
// import Select from 'react-select';
// import 'react-select/dist/react-select.css';
import styles from '../styles.css';
// import '!style-loader!css-loader!package.css'

const options = [
	'Newest', 'Highest rating', 'Lowest rating'
]

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
		const { handleSelectSort } = this.props;
		this.setState({
			selected: value
		})
		handleSelectSort(value);
	}

	render() {		
		return (
			<div id="sort">
			<div className= { styles.headerText }>Sort by</div>
			<Dropdown
				className= { styles.dropdown }
				options={ options }
				onChange={ this.handleChange }
				value={ this.state.selected }
				/>
			</div>
		)
	}
}

export default Sort;