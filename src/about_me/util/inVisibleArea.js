let clientHeight = document.body.clientHeight;

function inVisibleArea({ el }) {
	let elTopInView = window.scrollY + clientHeight > el.offsetTop + 100;
	let elBottomInView = window.scrollY + clientHeight <= el.offsetTop + el.offsetHeight;

	return elTopInView && elBottomInView
}

export default inVisibleArea