import React from 'react'
import { Card } from 'antd'

export default function SkillDescribe(props) {
	const { title, content} = props
	return (
		<div>
			{/*<h3>{ title }</h3>

			<p>
				{ content }
			</p>*/}
			<Card title={ title } extra={<a href='#'>detail</a>}>
				<p>
					{ content }
				</p>
			</Card>
		</div>

	)
}