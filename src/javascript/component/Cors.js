import React, { Component } from 'react'
import { JsonpCors } from '../util/jsonpCors';
import axios from 'axios'
import io from 'socket.io-client'

const socket = io('ws://localhost:9090')


export default class Cors extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: '',
			allowOrigin: '',
			webSocket: ''
		}
	}
	componentDidMount() {
		this.fetchJsonp();
		this.fetchAllowOrigin();
		this.fetchWebSocket()
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
	};

	fetchWebSocket = () => {
		socket.emit('hello', {data: 'socket'})
		socket.on('fine', (data) => {
			this.setState({
				webSocket: JSON.stringify(data)
			})
		})
	};

	render() {
		return(
			<div>
				<p>jsonp - client: localhsot:8080; server:localhost:9090</p>
				<div>your query{JSON.stringify(this.state.data)}</div>
				<br/><br/>
				<p>setHeader in server- client: localhsot:8080; server:localhost:9090</p>
				<div>
					Acess-Control-Allow-Origin{JSON.stringify(this.state.allowOrigin)}
				</div>
				<br/><br/>
				<p>webSocket - client: client: localhsot:8080; server:localhost:9090</p>
				<div>
					webSocket{this.state.webSocket}
				</div>
			</div>
		)
	}
}