import * as ACTION_TYPES from '../constants/ActionTypes'

function appealForm(state = {}, action) {
	switch (action.type) {
		case ACTION_TYPES.APPEAL_FORM:
			return action.payload;
		default:
			return state
	}
}

export {
	appealForm
}