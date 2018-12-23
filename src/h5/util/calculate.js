const docEl = document.documentElement;
const resizeEvt = 'orientationchange' in window
	? 'orientationchange'
	: 'resize';
function calculate() {
	const clientWidth = docEl.clientWidth;
	if (!clientWidth) return;
	docEl.style.fontSize = `${20 * (clientWidth / 320)}px`;
}

function resetFontSize() {
	docEl.style.fontSize = '16px';
}

export function fireCalculate() {
	window.addEventListener(resizeEvt, calculate, false);
	document.addEventListener('DOMContentLoaded', calculate, false);
}

export function removeCalculate() {
	window.removeEventListener(resizeEvt, calculate);
	resetFontSize();
}
