import React from 'react';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { CommonModal } from '../../module_common/react_modal/common_modal';
import '../css/ProjectDescribe.css';

const Element = BannerAnim.Element;
const appealImg = require('../assets/appeal.jpg');
const platformConfig = require('../assets/platformConfig.jpg');

const dataArray = [
	{
		pic: appealImg,
		title: '账号申诉',
		content: '根据平台的配置项展示用户需要输入的内容, 运用到的技术有 react + redux + antd',
		detail: '/react/appeal',
		color: '#FFF43D',
		background: '#F6B429',
	},
	{
		pic: platformConfig,
		title: '平台配置',
		content: '为了灵活的配置各平台的执行结果和数据截图，减少开发工作，提高效率，新增执行结果和数据截图配置功能。',
		detail: '/knockout/platformConfig',
		color: '#FF4058',
		background: '#FC1E4F',
	},
];

export default class DetailSwitchDemo extends React.Component {
	static defaultProps = {
		className: 'details-switch-demo',
	};

	constructor(props) {
		super(props);
		this.state = {
			showInt: 0,
			delay: 0,
			imgAnim: [
				{ translateX: [0, 300], opacity: [1, 0] },
				{ translateX: [0, -300], opacity: [1, 0] },
			],
			visible: false,
			modalChildren: null,
		};
		this.oneEnter = false;
	}

	onChange = () => {
		if (!this.oneEnter) {
			this.setState({ delay: 300 });
			this.oneEnter = true;
		}
	};

	onLeft = () => {
		let showInt = this.state.showInt;
		showInt -= 1;
		const imgAnim = [
			{ translateX: [0, -300], opacity: [1, 0] },
			{ translateX: [0, 300], opacity: [1, 0] },
		];
		if (showInt <= 0) {
			showInt = 0;
		}
		this.setState({ showInt, imgAnim });
		this.bannerImg.prev();
		this.bannerText.prev();
	};

	onRight = () => {
		let showInt = this.state.showInt;
		const imgAnim = [
			{ translateX: [0, 300], opacity: [1, 0] },
			{ translateX: [0, -300], opacity: [1, 0] },
		];
		showInt += 1;
		if (showInt > dataArray.length - 1) {
			showInt = dataArray.length - 1;
		}
		this.setState({ showInt, imgAnim });
		this.bannerImg.next();
		this.bannerText.next();
	};

	getDuration = (e) => {
		if (e.key === 'map') {
			return 800;
		}
		return 1000;
	};

	showInModal = (e) => {
		this.setState({
			visible: true,
			modalChildren: <img src={e.target.getAttribute('src')} alt="" />,
		});
	};

	closeModal = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		const imgChildren = dataArray.map((item, i) => (
			<Element key={item.title} style={{ background: item.color }} leaveChildHide>
				<QueueAnim
					animConfig={this.state.imgAnim}
					duration={this.getDuration}
					delay={[!i ? this.state.delay : 300, 0]}
					ease={['easeOutCubic', 'easeInQuad']}
					key="img-wrapper"
				>
					<div
						className={`${this.props.className}-pic pic${i}`}
						key="pic"
						onClick={() => {}}
						onKeyDown={this.showInModal}
					>
						<img src={item.pic} width="100%" />
					</div>
				</QueueAnim>
			</Element>));

		const textChildren = dataArray.map((item, i) => {
			const { title, content, background } = item;

			return (
				<Element key={item.title}>
					<QueueAnim type="bottom" duration={1000} delay={[!i ? this.state.delay + 500 : 800, 0]}>
						<h1 key="h1">{title}</h1>
						<em key="em" style={{ background }} />
						<p key="p">
							{content}
							{
								item.detail
								&& <Link to={item.detail}>详情</Link>
							}
						</p>

					</QueueAnim>
				</Element>
);
		});
		return (
<div
			className={`${this.props.className}-wrapper`}
			style={{ background: dataArray[this.state.showInt].background }}
>
			<div className={this.props.className}>
				<BannerAnim
					prefixCls={`${this.props.className}-img-wrapper`}
					sync
					type="across"
					duration={1000}
					ease="easeInOutExpo"
					arrow={false}
					thumb={false}
					ref={(c) => { this.bannerImg = c; }}
					onChange={this.onChange}
					dragPlay={false}
				>
					{imgChildren}
				</BannerAnim>

				<BannerAnim
					prefixCls={`${this.props.className}-text-wrapper`}
					sync
					type="across"
					duration={1000}
					arrow={false}
					thumb={false}
					ease="easeInOutExpo"
					ref={(c) => { this.bannerText = c; }}
					dragPlay={false}
				>
					{textChildren}
				</BannerAnim>

				<TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}>
					{this.state.showInt && <Icon type="left" key="left" onClick={this.onLeft} />}
					{this.state.showInt < dataArray.length - 1 && <Icon type="right" key="right" onClick={this.onRight} />}
				</TweenOneGroup>
			</div>

			<CommonModal
				visible={this.state.visible}
				onOk={this.closeModal}
				onCancel={this.closeModal}
				width={800}
			>
				{this.state.modalChildren}
			</CommonModal>
</div>
);
	}
}
