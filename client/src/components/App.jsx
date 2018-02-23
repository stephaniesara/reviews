import React from 'react';
import $ from '../../../node_modules/jquery';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$.ajax({
			method: 'GET',
			url: 'http://localhost:3002/reviews/' + this.props.id,
			success: (result) => {
				console.log('get success!')
				console.log(result);
			},
			error: (err) => {
				console.log('get error!')
				console.log(err);
			}
		})
	}

	render() {
		return (
			<div>this is the app
			</div>
		)
	}
}

module.exports = App;