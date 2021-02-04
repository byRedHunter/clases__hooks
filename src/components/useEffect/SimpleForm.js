import React, { useEffect, useState } from 'react'
import Message from './Message'

const SimpleForm = () => {
	const [formState, setFormState] = useState({ name: '', email: '' })

	const { name, email } = formState

	useEffect(() => {
		console.log('Hey')
	}, [])

	/* useEffect(() => {
		console.log('FormState cambio')
	}, [formState]) */

	const handleInputChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	return (
		<div className='container py-4 text-center'>
			<h3>useEffect</h3>

			<div className='form-group'>
				<input
					type='text'
					name='name'
					className='form-control'
					placeholder='Tu nombre'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>
			</div>
			<div className='form-group'>
				<input
					type='email'
					name='email'
					className='form-control'
					placeholder='Tu email'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
			</div>

			{name === 'redhunter' && <Message />}
		</div>
	)
}

export default SimpleForm
