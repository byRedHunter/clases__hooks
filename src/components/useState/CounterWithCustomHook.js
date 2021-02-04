import React from 'react'
import { useCounter } from './hooks/useCounter'

const CounterWithCustomHook = () => {
	const { counter, increse, decrese, reset } = useCounter()

	return (
		<div className='container text-center'>
			<h3>Counter with Hook: {counter}</h3>

			<button className='btn btn-success' onClick={() => decrese(5)}>
				-1
			</button>
			<button className='btn btn-info' onClick={reset}>
				reset
			</button>
			<button className='btn btn-warning' onClick={() => increse(3)}>
				+1
			</button>
		</div>
	)
}

export default CounterWithCustomHook
