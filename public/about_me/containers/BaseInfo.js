import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TweenOne, { TweenOneGroup, ticker } from 'rc-tween-one'

//css
import '../css/BaseInfo.css'

class BaseInfo extends Component {
	static defaultProps = {
		image: 'https://zos.alipayobjects.com/rmsportal/gsRUrUdxeGNDVfO.svg',
		w: 300,
		h: 300,
		pixSize: 20,
		pointSizeMin: 10,
	};

	constructor(props) {
		super(props);
		this.state = {};
		this.interval = null;
		this.gather = true;
		this.intervalTime = 9000
	}

	componentDidMount() {
		this.dom = ReactDOM.findDOMNode(this);
		this.createPointData();
	}

	componentWillUnmount() {
		ticker.clear(this.interval);
		this.interval = null;
	}

	onMouseEnter = () => {
		if (!this.gather) {
			this.updateTweenData();
		}
		this.componentWillUnmount();
	};

	onMouseLeave = ()  => {
		if (this.gather) {
			this.updateTweenData();
		}
		this.interval = ticker.interval(this.updateTweenData, this.intervalTime)
	};

	setDataToDom(data, w, h) {
		this.pointArray = [];
		const number = this.props.pixSize;

		for (let i = 0; i < w; i += number) {
			for (let j = 0; j < h; j += number) {
				if (data[((i + j * w) * 4) + 3] > 150) {
					this.pointArray.push({ x: i, y: j })
				}
			}
		}

		let children = [];
		this.pointArray.forEach((item, index) => {
			const wh = Math.random() * this.props.pointSizeMin + this.props.pointSizeMin;
			const opacity = Math.random() * 0.4 + 0.1;

			children.push((
				<TweenOne className='point-wrapper' key={index} style={{ left: item.x, top: item.y }}>
					<TweenOne
						className="point"
						style={{
							width: wh,
							height: wh,
							opacity: opacity,
							backgroundColor: `rgb(${Math.round(Math.random() * 95 + 160)}, 255, 255)`
						}}
						animation={{
							y: (Math.random() * 2 -1) * 10 || 5,
							x: (Math.random() * 2 -1) * 5 || 2.5,
							delay: Math.random() * 1000,
							duration: 3000,
							repeat: -1,
							yoyo: true,
							ease: 'easeInOutQuad'
						}}
					/>

				</TweenOne>
			))
		});

		this.setState({
			children,
			boxAnim: { opacity: 0, type: 'from', duration: 800}
		}, () => {
			this.interval = ticker.interval(this.updateTweenData, this.intervalTime)
		})
	};

	createPointData = () => {
		const { w, h } = this.props;

		const canvas = document.getElementById('canvas');
		const ctx = canvas.getContext('2d');

		ctx.clearRect(0, 0, w, h);
		console.log(w, h)
		canvas.width = this.props.w;
		canvas.height = h;

		const img = new Image();
		img.onload = () => {
			ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);
			const data = ctx.getImageData(0, 0, w, h).data;
			this.setDataToDom(data, w, h);
			//this.dom.removeChild(canvas)
		};

		img.crossOrigin = 'anonymous';
		img.src = this.props.image;
	};

	gatherData = () => {
		const children = this.state.children.map(item =>
			React.cloneElement(item, {
				animation: {
					x: 0,
					y: 0,
					opacity: 1,
					scale: 1,
					delay: Math.random() * 500,
					duration: 800,
					ease: 'easeInOutQuint'
				}
			})
		);

		this.setState({ children })
	};

	dispersData = () => {
		const rect = this.dom.getBoundingClientRect();
		const sideRect = this.sideBox.getBoundingClientRect();
		const sideTop = sideRect.top - rect.top;
		const sideLeft = sideRect.left - rect.left;
		const children = this.state.children.map(item =>
			React.cloneElement(item, {
				animation: {
					x: Math.random() *  rect.width - sideLeft - item.props.style.left,
					y: Math.random() * rect.height - sideTop - item.props.style.top,
					opacity: Math.random() * 0.4 + 0.1,
					scale: Math.random() * 2.4 + 0.1,
					duration: Math.random() * 500 + 500,
					ease: 'easeInOutQuint',
				}
			})
		);

		this.setState({ children })
	};

	updateTweenData = () => {
		this.dom = ReactDOM.findDOMNode(this);
		this.sideBox = ReactDOM.findDOMNode(this.sideBoxComp);
		((this.gather && this.dispersData) || this.gatherData)();
		this.gather = !this.gather
	};


	render() {
		return (
			<div className='logo-gather-demo-wrapper'>
				<canvas id="canvas"/>
				<TweenOne
					animation={this.state.boxAnim}
					className='right-side blur'
					onMouseEnter={this.onMouseEnter}
					onMouseLeave={this.onMouseLeave}
					ref={(c) => {
						this.sideBoxComp = c;
					}}
				>
					{ this.state.children }
				</TweenOne>
			</div>
		)
	}
}

export default BaseInfo