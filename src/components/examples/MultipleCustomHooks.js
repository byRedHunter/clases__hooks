import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../useState/hooks/useCounter'

const MultipleCustomHooks = () => {
	const { counter, increse } = useCounter(1)
	const { loading, data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	)
	// si existe data, extrae los valores
	const { author, quote } = !!data && data[0]

	return (
		<div className='container py-4 text-center'>
			<h1 className='h4'>BreakingBad Quotes</h1>
			<hr />

			{loading ? (
				<div className='alert alert-info'>Loading...</div>
			) : (
				<blockquote className='blockquote text-right'>
					<p className='mb-0'>{quote}</p>
					<footer className='blockquote-footer text-primary'>{author}</footer>
				</blockquote>
			)}
			<button className='btn btn-success' onClick={() => increse()}>
				Siguiente quote
			</button>
		</div>
	)
}

export default MultipleCustomHooks
