import React, { Component } from 'react'

import BaseInfo from './containers/BaseInfo'

class AboutMe extends Component {
	render() {
		return <BaseInfo
			image={require('./assets/me.svg')}
			pixSize={15}
			pointSizeMin={10}
		/>
	}
}

export default AboutMe