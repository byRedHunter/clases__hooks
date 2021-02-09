import React, { useRef } from 'react'

const FocusScreen = () => {
	const inputRef = useRef()

	const handleClick = () => {
		//document.querySelector('input').select()
		inputRef.current.select()
	}

	return (
		<div className='container py-4 text-center'>
			<h1 className='h3'>UseRef</h1>
			<hr />

			<input
				ref={inputRef}
				type='text'
				className='form-control'
				placeholder='Su nombre'
			/>

			<button onClick={handleClick} className='btn btn-warning mt-4 px-5'>
				Focus
			</button>
		</div>
	)
}

export default FocusScreen
