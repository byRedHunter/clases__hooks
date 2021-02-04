import React, { useState } from 'react'

const CounterApp = () => {
	const [state, setState] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
		counter4: 40,
	})

	const handleClic = () => {
		setState({ ...state, counter1: state.counter1 + 1 })
	}

	return (
		<div className='container py-4'>
			<div className='h2 text-center'>Counter 1: {state.counter1}</div>
			<div className='h2 text-center'>Counter 2: {state.counter2}</div>
			<div className='h2 text-center'>Counter 3: {state.counter3}</div>
			<div className='h2 text-center'>Counter 4: {state.counter4}</div>
			<hr />

			<div className='text-center'>
				<button className='btn btn-primary px-5' onClick={handleClic}>
					+1
				</button>
			</div>
		</div>
	)
}

export default CounterApp
