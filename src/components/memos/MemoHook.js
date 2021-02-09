import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'

import { useCounter } from '../useState/hooks/useCounter'

const MemoHook = () => {
	const { counter, increse } = useCounter(100)
	const [show, setShow] = useState(true)

	const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

	return (
		<div className='container py-4 text-center'>
			<h1 className='h4'>MemoHook: {counter}</h1>
			<hr />

			{/* <p>{procesoPesado(counter)}</p> */}
			<p>{memoProcesoPesado}</p>

			<button className='btn btn-primary' onClick={() => increse()}>
				+1
			</button>

			<button className='btn btn-warning' onClick={() => setShow(!show)}>
				Show/Hide {JSON.stringify(show)}
			</button>
		</div>
	)
}

export default MemoHook
