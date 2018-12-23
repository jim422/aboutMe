import React, { Component } from 'react';
import img404 from '../assets/image/404.png';

class NotMatch extends Component {
	render() {
		return (
			<div>
				<img src={img404} alt="" />
			</div>
		);
	}
}

export default NotMatch;
