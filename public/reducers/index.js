import { combineReducers } from 'redux'

function test(state = { count: 1 }, action) {
	switch (action.type) {
		case 'add':
			return Object.assign({}, state, {
				count: state.count + 1
			})
		case 'subtract':
			return Object.assign({}, state, {
				count: state.count - 1
			})
		default:
			return state
	}
}

export default test