const clientHeight = document.body.clientHeight;

function inVisibleArea({ el }) {
	const elTopInView = window.scrollY + clientHeight > el.offsetTop + 100;
	const elBottomInView = window.scrollY + clientHeight <= el.offsetTop + el.offsetHeight;

	return elTopInView && elBottomInView;
}

export default inVisibleArea;
