import React, { Component } from 'react'
import ScrollLink from 'rc-scroll-anim/lib/ScrollLink';


import BaseInfo from './containers/BaseInfo'
import SkillTree from './containers/SkillTree'
import Projects from './containers/Projects'
import WorkExperience from './containers/WorkExperience'

import './css/AboutMe.css'

class AboutMe extends Component {
	render() {
		return (
			<div >
				<div>
					<ScrollLink to="banner" showHeightActive={['100%', '30%']} toHash={false} />
					<ScrollLink to="page1" showHeightActive="30%" toHash={false} />
					<ScrollLink to="page2" showHeightActive={['30%', '70%']} toHash={false} />
					<ScrollLink to="page3" showHeightActive="70%" toHash={false} />
				</div>

				<div className='home-page-wrapper page-first'>
					<BaseInfo />
				</div>

				<div className='home-page-wrapper'>
					<SkillTree />
				</div>

				<div className='home-page-wrapper'>
					<Projects />
				</div>

				<div className='home-page-wrapper page-last'>
					<WorkExperience />
				</div>

			</div>

		)
	}
}

export default AboutMe