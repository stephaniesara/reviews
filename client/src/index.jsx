import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// ID # from proxy server
// workable ids: 1, 5, 12, 13, 15, 17 ...
var iterator = 2;

ReactDOM.render(
	<App iterator={ iterator } />,
	document.getElementById('app')
);