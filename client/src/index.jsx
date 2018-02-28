import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import data from '../../data.json';

// TODO: fill in with real business id; this is just for testing purposes
// var id = '--DaPTJW3-tB1vP-PfdTEg';

// ID # from proxy server
var n = 10;

// ensure n is within range 1 to 267
if (n < 1 || n > 267) {
	console.log('error, ID must be between 1 and 267')
} else {
	const restaurant = data[n - 1];

	// only for testing and verification
	console.log('id', restaurant.id);
	console.log('name', restaurant.name);
	console.log('stars', restaurant.stars);
	console.log('reviews', restaurant.review_count);

	ReactDOM.render(
		<App restaurant={ restaurant } />,
		document.getElementById('app')
	);
}
