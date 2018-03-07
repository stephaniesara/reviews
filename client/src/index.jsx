import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ID # from proxy server
// workable ids: 1, 5, 12, 13, 15, 17 ...

// get restaurant iterator from the page URL
const iterator = window.location.href.split("/").pop().substring(4) || '1';

ReactDOM.render(
	<App iterator={ iterator } />,
	document.getElementById('app')
);