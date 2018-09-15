import React, { Component } from 'react'
import { JsonpCors } from '../util/jsonpCors';
import axios from 'axios'

export default class Cors extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: '',
			allowOrigin: ''
		}
	}
	componentDidMount() {
		this.fetchJsonp();
		this.fetchAllowOrigin()
	}

	fetchJsonp = () => {
		let corss = new JsonpCors({
			url: 'http://localhost:9090/cors/jsonp',
			params: {
				wd: 'ff'
			}
		});

		corss.fetch().then((data) => {
			this.setState({
				data
			})
		}).catch(e => console.log(e))
	};

	fetchAllowOrigin = () => {
		axios.post('http://localhost:9090/cors/allowOrigin')
			.then(data => {
				this.setState({
					allowOrigin: data
				})
			})
	}

	render() {
		return(
			<div>
				<p>jsonp - quest: localhsot:8080; cross_origin:localhost:9090</p>
				<div>your query{JSON.stringify(this.state.data)}</div>
			</div>
		)
	}
}