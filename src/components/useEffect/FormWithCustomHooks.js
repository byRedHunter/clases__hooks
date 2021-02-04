import React, { useEffect } from 'react'
import { useForm } from './Hooks/useForm'

const FormWithCustomHooks = () => {
	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
	})

	const { name, email, password } = formValues

	useEffect(() => {
		console.log('Cambia el email')
	}, [email])

	const handleSubmit = (e) => {
		e.preventDefault()

		console.log(formValues)
	}
	return (
		<form className='container py-4 text-center' onSubmit={handleSubmit}>
			<h5>FormWithCustomHooks</h5>

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
					type='text'
					name='email'
					className='form-control'
					placeholder='Tu email'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
			</div>
			<div className='form-group'>
				<input
					type='password'
					name='password'
					className='form-control'
					placeholder='************'
					value={password}
					onChange={handleInputChange}
				/>
			</div>

			<button className='btn btn-success'>enviar</button>
		</form>
	)
}

export default FormWithCustomHooks
