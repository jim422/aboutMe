import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QueueAnim from 'rc-queue-anim';

import Carousel from '../components/Carousel';
import SKILLS from '../constants/SKILLS';
import SkillDescribe from '../components/SkillDescribe';
import inVisibleArea from '../util/inVisibleArea';

import '../css/SkillTree.css';
import '../css/Carousel.css';

export default class SkillTree extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			current: 0,
			skillWrapper: SKILLS,
		};
	}

	componentDidMount() {
		this.el = ReactDOM.findDOMNode(this);
		this.offsetHeight = this.el.offsetHeight;
		this.clientHeight = document.body.clientHeight;
		if (window.addEventListener) {
			window.addEventListener('scroll', this.scroll);
		} else {
			window.attachEvent('onscroll', this.scroll);
		}
	}

	componentWillUnmount() {
		if (window.addEventListener) {
			window.removeEventListener('scroll', this.scroll);
		} else {
			window.detachEvent('onscroll', this.scroll);
		}
	}

	scroll = () => {
		if (inVisibleArea({ el: this.el })) {
			this.setState({ show: true });
		} else {
			this.setState({ show: false });
		}
	};

	onChange = ({ current, eventType }) => {
		if (eventType === 'end') {
			this.setState({ current });
		}
	};

	render() {
		const { current } = this.state;
		const currentSkill = SKILLS[current];
		const children = this.state.skillWrapper.map((item, i) => (
			<div
				key={i.toString()}
				className={`img-wrapper-${i}`}
			/>
		));
		return (
			<div className='skill-container'>
				<QueueAnim
					className='skill-title'
					type={['right', 'left']}
					delay={300}
					ease={['easeOutQuart', 'easeInOutQuart']}
				>
					{
						this.state.show
						&& (
							<div className='center' key={1}>
								<h3>Skill Tree</h3>
							</div>
						)
					}
				</QueueAnim>

				<div
					className="carousel-demo-wrapper"
					style={{ backgroundColor: currentSkill.backgroundColor }}
				>
					<Carousel className="carousel-demo" childMaxLength={6} onChange={this.onChange}>
						{ children }
					</Carousel>
				</div>

				<div className='skill-describe'>
					<SkillDescribe
						title={currentSkill.title}
						content={currentSkill.content}
						detail={currentSkill.detail}
					/>
				</div>
			</div>
		);
	}
}
