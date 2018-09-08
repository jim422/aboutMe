import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions/index'
console.log(actions);
class Appeal extends Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		console.log(this.props)
		this.props.fetchAppealForm(2222)
	}
	render() {
		return(
			<div>
				dddd
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		test: state.test
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