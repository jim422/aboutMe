import React, { Component } from 'react';

import AboutMeLogo from '../components/AboutMeLogo';
import PersonalInfo from '../components/PersonalInfo';

const me = require('../assets/me.svg');

class BaseInfo extends Component {
	render() {
		return (
			<div className='logo-gather-demo-wrapper'>
				<AboutMeLogo
					image={me}
					pixSize={15}
					pointSizeMin={10}
					containClass="contain-class"
				/>
				<div className='person-info'>
					<PersonalInfo />
				</div>
			</div>
		);
	}
}

export default BaseInfo;
