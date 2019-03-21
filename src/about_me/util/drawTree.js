const TREE_COLOR = '#72571C';
const g = 0.01; //重力加速度
const gWind = 0.005;//风力加速度
const limitSpeedY = 1;//速度上限
//const limitSpeedX = 1; //速度上限

let flowerList = [];
let fallList = [];

function drawTree(x, y, deg, step, ctx) {
	let deg1 = step % 2 === 0 ? 0.1 : -0.1;
	let x1 = x + Math.cos(deg + deg1) * (step + 4) * 0.8; //以步长来判断枝干长度 x轴偏移大一些
	let y1 = y + Math.sin(deg + deg1) * step; //以步长来判断枝干长度 Y轴压缩一些
	ctx.beginPath();
	ctx.lineWidth = step / 2;
	ctx.moveTo(x, y);
	ctx.lineTo(x1, y1);
	ctx.strokeStyle = TREE_COLOR;
	ctx.stroke();

	//树干相交的位置有间隙，以一个圆填充
	if (step > 20) {
		ctx.fillStyle = TREE_COLOR;
		ctx.arc(x, y, step / 6, 0, Math.PI * 2);
		ctx.fill();
	}

	//在末端五个节点，画一个半圆，作为樱花效果
	if (step < 3 || (step < 23 && Math.random() > 0.1)) {
		let r = Math.random() * 2 + 2;
		let color = `rgba(${Math.round(Math.random() * (255 - 240) + 240)}, 158, 194, 0.5)`;
		ctx.fillStyle = color;
		ctx.arc(x1 + Math.random() * 3, y1 + Math.random() * 3, r, 0, Math.PI);
		ctx.fill();
		flowerList.push({ x, y, sx: Math.random() - 0.5, sy: 0, color, r, deg });
	}

	step--;
	if (step > 0) {
		drawTree(x1, y1, deg, step, ctx);

		if (step % 3 === 1) {
			//分叉
			drawTree(x1, y1, deg + 0.4 + 0.3 * Math.random(), Math.round(step / 1.13), ctx);
		}

		if (step % 3 === 0) {
			drawTree(x1, y1, deg - 0.4 - 0.3 * Math.random(), Math.round(step / 1.13), ctx);
		}
	}
}

function flowerFall(ctx, width, height) {
	let len = flowerList.length;

	if (Math.random() > 0.3) {
		fallList.push(flowerList[Math.floor(Math.random() * len)]);
	}

	ctx.clearRect(0, 0, width, height);

	for (var i = 0; i < fallList.length; i++) {
		var currentItem = fallList[i];
		if (currentItem.sy < limitSpeedY) {
			currentItem.sy += g;
		}

		currentItem.sx += gWind;
		currentItem.x += currentItem.sx;
		currentItem.y += currentItem.sy;

		if (currentItem.y > height) {
			fallList.splice(i, 1);
			i--;
			continue;
		}

		ctx.beginPath();
		ctx.fillStyle = currentItem.color;

		//跟速度相关的旋转花瓣
		currentItem.deg = currentItem.sx * 0.5;
		ctx.arc(currentItem.x, currentItem.y, currentItem.r, currentItem.deg, currentItem.deg + Math.PI * 1.3);
		ctx.fill();
	}

	requestAnimationFrame(() => {
		flowerFall(ctx, width, height);
	});
}

export {
	drawTree,
	flowerFall
};
