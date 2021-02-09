import React, { useLayoutEffect, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../useState/hooks/useCounter'

import './layout.css'

const UseLayoutEffect = () => {
	const { counter, increse } = useCounter(1)
	const { data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	)
	// si existe data, extrae los valores
	const { quote } = !!data && data[0]

	const parrafo = useRef()

	useLayoutEffect(() => {
		console.log(parrafo.current.getBoundingClientRect())
	}, [quote])

	return (
		<div className='container py-4 text-center'>
			<h1 className='h4'>LayoutEffect</h1>
			<hr />

			<blockquote className='blockquote text-right'>
				<p ref={parrafo} className='mb-0'>
					{quote}
				</p>
			</blockquote>

			<button className='btn btn-success' onClick={() => increse()}>
				Siguiente quote
			</button>
		</div>
	)
}

export default UseLayoutEffect
