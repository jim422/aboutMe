import React, { Component } from 'react';
//import { sify } from 'chinese-conv';

import PersonalInfo from '../components/PersonalInfo';
import Tree from '../components/Tree';


import '../css/BaseInfo.css';

class BaseInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className='logo-gather-demo-wrapper'>

				<Tree />
				<div className='person-info'>
					<PersonalInfo />
				</div>

			</div>
		);
	}
}

export default BaseInfo;
