import React from 'react'
import RecordItem from './RecordItem'

function RecordList(props) {
	const { form, index, field } = props
	return (
		<div className='record-item'>
		{
			props.items.map((item, key) => {
				return <RecordItem
					form={ form }
					field={`data[${index}][${field}][${key}]`}
					item={ item }
					key={ item.id }
				/>
			})
		}
		</div>
	)
}

export default RecordList

