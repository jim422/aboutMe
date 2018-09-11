import React from 'react'
import { Card } from 'antd'

export default function SkillDescribe(props) {
	const { title, content} = props
	return (
		<div>
			<Card title={ title } extra={<a href='#'>detail</a>}>
				<p>
					{ content }
				</p>
			</Card>
		</div>

	)
}