import React, { Component } from 'react';
import { drawTree, flowerFall } from '../util/drawTree';

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

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

		drawTree(WIDTH / 3, HEIGHT, -Math.PI / 2, 31, ctx);

		requestAnimationFrame(() => {
			flowerFall(flowerCtx, WIDTH, HEIGHT);
		});
	}

	render() {
		return (
			<div
				className='canvas-container'
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
