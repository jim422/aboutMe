import axios from 'axios';
import * as ACTION_TYPES from '../constants/ActionTypes';

export const fetchAppealForm = (orderId) => {
	return function (dispatch) {
		return axios.get('/api/appeal/form', { orderId })
			.then((data) => {
				dispatch({
					type: ACTION_TYPES.APPEAL_FORM,
					payload: data.data,
				});
			});
	};
};

export const fetchAppealReason = (orderId) => (dispatch) => {
	return axios.post('api/appeal/reason', { orderId })
		.then((data) => {
			dispatch({
				type: ACTION_TYPES.APPEAL_REASON,
				payload: data,
			});
		});
};
