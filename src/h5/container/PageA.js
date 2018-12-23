import React, { Component } from 'react';
import Tween from 'rc-tween-one';
import classNames from 'classnames';
import '../css/pageA.css';


class PageA extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boyTweenData: {},
			animationEnd: false,
		};
	}

	componentDidMount() {
		this.animateStart()
			.then(() => {
				this.setState({
					boyTweenData: {
						duration: 500,
						rotateY: '-180',
						scale: '1.5',
						onComplete: () => {
							this.setState({
								animationEnd: true,
							});
						},
					},
				});
			});
	}

	animateStart() {
		return new Promise((res) => {
			this.setState({
				boyTweenData: {
					duration: 10000,
					top: '4rem',
					right: '16rem',
					scale: '1.2',
					onComplete: () => {
						res();
					},
				},
			});
		});
	}

	render() {
		const boyClassName = classNames({
			'chs-boy': true,
			'chs-boy-deer': !this.state.animationEnd,
		});
		return (
			<section
				className="page-a bg-adaptive"
			>
				<Tween
					animation={this.state.boyTweenData}
					className={boyClassName}
					key="boy"
					ref={(boyTween) => {
						this.boyTween = boyTween;
					}}
				/>
				<div className="window wood">
					<div className="window-bg" />
					<div className="window-content">
						<div className="window-left window-transition hover" />
						<div className="window-right window-transition hover" />
					</div>
				</div>
				<figure className='moon' />
				<figure className='tree' />
				<figure className='cloudy' />
			</section>
		);
	}
}

export default PageA;
