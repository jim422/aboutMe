import React, { Component } from 'react';

import JsContainer from './container/JavaScript';
import './css/index.css';

class JavaScript extends Component {
	render() {
		console.log(this.props);
		return (
			<div className='javascript-container'>
				<JsContainer />
			</div>

		);
	}
}

export default JavaScript;
