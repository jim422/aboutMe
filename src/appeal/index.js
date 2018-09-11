import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions/index'
import AppealForm from './container/AppealForm'

import './css/appeal.css'

class Appeal extends Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		this.props.fetchAppealForm(2222)
	}
	render() {
		return(
			<div>
				<AppealForm
					appealForm={this.props.appealForm}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		appealForm: state.appealReducer.appealForm
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAppealForm: (campaignId) => dispatch(actions.fetchAppealForm(campaignId))
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Appeal)