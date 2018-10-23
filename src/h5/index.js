import React, { Component } from 'react'
import PageA from './container/PageA'
import PageB from './container/PageB'
import PageC from './container/PageC'
import './css/index.css'
import './util/calculate'

class H5 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentPage: 'page-a'
		}
	}
	changePage = (e) => {
		this.setState({
			currentPage: e.target.value
		})
	}
	render() {
		return (
			<div className="h5-container">
				{
					this.state.currentPage == 'page-a'
						? <PageA/>
						: null
				}

				{
					this.state.currentPage == 'page-b'
						? <PageB/>
						: null
				}

				{
					this.state.currentPage == 'page-c'
					? <PageC/>
					: null
				}
				<div style={{position: 'relative', zIndex: 100}}>
					选择页面：
					<select id="page" onChange={this.changePage}>
						<option value="page-a" selected="">1</option>
						<option value="page-b">2</option>
						<option value="page-c">3</option>
					</select>
				</div>


			</div>
		)
	}
}

export default H5