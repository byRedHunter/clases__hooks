import React, { useState } from 'react'
import MultipleCustomHooks from '../examples/MultipleCustomHooks'

const RealExampleUseRef = () => {
	const [show, setShow] = useState(false)

	return (
		<div className='container py-4 text-center'>
			<h1 className='h3'>UseRef Example</h1>
			<hr />

			{show && <MultipleCustomHooks />}

			<button className='btn btn-primary mt-5' onClick={() => setShow(!show)}>
				Show/Hide
			</button>
		</div>
	)
}

export default RealExampleUseRef
