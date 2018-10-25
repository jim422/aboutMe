import React, { Component } from 'react'
import ProjectDescribe from '../components/ProjectDescribe'
import inVisibleArea from '../util/inVisibleArea'
import ReactDOM from 'react-dom'

import QueueAnim from 'rc-queue-anim'


import '../css/ProjectDescribe.css';

export default class Projects extends Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: false
		}
	}

	componentWillUnmount() {
		if (window.addEventListener) {
			window.removeEventListener('scroll', this.scroll);
		} else {
			window.detachEvent('onscroll', this.scroll);
		}
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

	scroll = () => {
		if (inVisibleArea({ el: this.el })) {
			this.setState({ visible: true })
		} else {
			this.setState({ visible: false })
		}
	};

	render() {
		return(
			<div className='project-container'>
				<QueueAnim
					className='project-title'
					type={ ['right', 'left'] }
					delay={ 300 }
					ease={ ['easeOutQuart', 'easeInOutQuart'] }
				>
					{
						this.state.visible
							? [<div className='center' key={ 1 }>
								<h3>项目经验</h3>
							</div>]
							: null

					}
				</QueueAnim>
				<ProjectDescribe />
			</div>
		)
	}
}