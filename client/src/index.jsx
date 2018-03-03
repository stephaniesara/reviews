import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// ID # from proxy server
// workable ids: 1, 5, 12, 13, 15, 17 ...
// var iterator = 5;

// get restaurant iterator from the page URL
let iterator = window.location.href.split("/").pop().substring(4) || '1';

ReactDOM.render(
	<App iterator={ iterator } />,
	document.getElementById('app')
);