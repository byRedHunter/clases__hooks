import React, { useState } from 'react'

import { useCounter } from '../useState/hooks/useCounter'
import { Small } from './Small'

const Memorize = () => {
	const { counter, increse } = useCounter(10)
	const [show, setShow] = useState(true)

	return (
		<div className='container py-4 text-center'>
			<h1 className='h3'>Memorize</h1>
			<hr />

			<h3 className='h4'>
				Counter: <Small value={counter} />
			</h3>

			<button className='btn btn-primary' onClick={() => increse()}>
				+1
			</button>

			<button className='btn btn-warning' onClick={() => setShow(!show)}>
				Show/Hide {JSON.stringify(show)}
			</button>
		</div>
	)
}

export default Memorize
