import React, { Component } from 'react';
import { drawTree, flowerFall } from '../util/drawTree';

const WIDTH = 800;
const HEIGHT = 500;

class Tree extends Component {
	componentDidMount() {
		let dom = document.getElementById('tree');
		let ctx = dom.getContext('2d');
		let flowerDom = document.getElementById('flower');
		let flowerCtx = flowerDom.getContext('2d');

		dom.width = WIDTH;
		dom.height = HEIGHT;

		flowerDom.width = WIDTH;
		flowerDom.height = HEIGHT;

		drawTree(WIDTH / 2, HEIGHT, -Math.PI / 2, 30, ctx);

		requestAnimationFrame(() => {
			flowerFall(flowerCtx, WIDTH, HEIGHT);
		});
	}

	render() {
		return (
			<div
				className='canvas-container'
				style={{
					position: 'absolute',
					top: '290px',
					left: '20px'
				}}
			>
				<canvas
					id='tree'
					className='canvas'
				/>
				<canvas
					id='flower'
					className='canvas'
				/>
			</div>
		);
	}
}

export default Tree;
