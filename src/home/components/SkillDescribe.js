import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

export default function SkillDescribe(props) {
	const { title, content, detail } = props;
	return (
		<div>
			<Card
				title={title}
				extra={
					detail
						? <Link to={`${detail}`}>detail</Link>
						: null
				}
			>
				<p>
					{ content }
				</p>
			</Card>
		</div>

	);
}
