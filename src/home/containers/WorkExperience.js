import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QueueAnim from 'rc-queue-anim';
import { Steps } from 'antd';

import inVisibleArea from '../util/inVisibleArea';

import '../css/WorkExperience.css';

const Step = Steps.Step;

export default class WorkExperience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
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
			this.setState({ visible: true });
		} else {
			this.setState({ visible: false });
		}
	};

	render() {
		return (
			<div className='middle work-experience'>

				<QueueAnim
					className='work-title'
					type={['right', 'left']}
					delay={300}
					ease={['easeOutQuart', 'easeInOutQuart']}
				>
					{
						this.state.visible
							? (
								<div className='center' key={3}>
									<h3>工作经验</h3>
								</div>
							)
							: null

					}
				</QueueAnim>

				<Steps direction="vertical" current={2} className='padding-top-20'>
					<Step title="2016/08" description="入职微播易" />
					<Step title="2018/09" description="离开微播易" />
					<Step title="2018/10" description="入职用友" />
				</Steps>
			</div>
		);
	}
}
