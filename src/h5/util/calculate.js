let docEl = document.documentElement;
let resizeEvt =  'orientationchange' in window
	? 'orientationchange'
	: 'resize';
function calculate() {
	let clientWidth = docEl.clientWidth;
	if (!clientWidth) return;
	docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';

}

window.addEventListener(resizeEvt, calculate, false);
document.addEventListener('DOMContentLoaded', calculate, false);