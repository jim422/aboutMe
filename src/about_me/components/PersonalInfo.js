import React, { PureComponent } from 'react'
import uiKit from '../../../node_modules/uikit/dist/css/uikit.min.css'
import { Icon } from 'antd'

class PersonalInfo extends PureComponent {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div>
				<div className='uk-box-shadow-small uk-box-shadow-hover-large'>
					<span className='title'>
						Everything should be made as simple as possible
						<br/>
						but not simpler
					</span>
					<ul className="info-item">
						<li>
							<Icon type="user" /> 金峰杰
						</li>
						<li>
							<Icon type="mail" />jinfengjie_12@126.com
						</li>
						<li>
							<Icon type="github" /><a href="https://github.com/jim422" style={{ color: 'black' }}>https://github.com/jim422</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default PersonalInfo
