import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'

import Carousel from '../components/Carousel'

import '../css/SkillTree.css'
import '../css/Carousel.css'

export default class SkillTree extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			/*imgWrapper: [
				'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
				'https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png',
				'https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png',
				'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png',
				'https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png',
				'https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png',
			]*/
			skillWrapper: [{
				src: 'javascript.png',
				title: 'javascript',
				content: 'javascript'
			}, {
				src: 'knockoutjs.png',
				title: 'title',
				content: 'knockout'
			}, {
				src: 'react.jpeg',
				title: 'react',
				content: 'react'
			}, {
				src: 'webpack.jpeg',
				title: 'webpack',
				content: 'webp'
			}]
		};

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
		if (this.inVisibleArea()) {
			this.setState({ show: true })
		} else {
			this.setState({ show: false })
		}
	};

	inVisibleArea = () => {
		let elTopInView = window.scrollY + this.clientHeight > this.el.offsetHeight + 100;
		let elBottomInView = window.scrollY + this.clientHeight < this.el.offsetTop + this.el.offsetHeight;

		return elTopInView && elBottomInView
	}

	render() {
		const children = this.state.skillWrapper.map((item, i) => (
			<div
				key={i.toString()}
				className={`img-wrapper-${i}`}
			>
			</div>
		));
		return(
			<div className='skill-container'>
				<QueueAnim
					className='simple'
					type={['right', 'left']}
					delay={600}
					ease={['easeOutQuart', 'easeInOutQuart']}
				>
					{
						this.state.show
							? [<div className='center' key={1}>
									<h3>Skill Tree</h3>
								</div>]
							: null

					}
				</QueueAnim>

				<div className="carousel-demo-wrapper">
					<Carousel className="carousel-demo" childMaxLength={6}>
						{children}
					</Carousel>
				</div>
			</div>
		)
	}
}