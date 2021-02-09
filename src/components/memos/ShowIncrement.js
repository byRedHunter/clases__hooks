import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
	console.log('volvi a generar :(')
	return (
		<div className='btn btn-primary' onClick={() => increment(5)}>
			Incrementar
		</div>
	)
})
