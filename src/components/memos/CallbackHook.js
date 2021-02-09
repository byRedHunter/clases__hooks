import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

const CallbackHook = () => {
	const [counter, setCounter] = useState(10)

	const increment = useCallback(
		(num) => {
			setCounter((current) => current + num)
		},
		[setCounter]
	)

	return (
		<div className='container py-4 text-center'>
			<h1 className='h4'>CallbackHook {counter}</h1>

			<ShowIncrement increment={increment} />
		</div>
	)
}

export default CallbackHook
