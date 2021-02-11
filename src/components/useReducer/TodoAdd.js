import React from 'react'
import { useForm } from '../useEffect/Hooks/useForm'
import PropTypes from 'prop-types'

export const TodoAdd = ({ handleAddTodo }) => {
	const [{ description }, habldeInputChange, reset] = useForm({
		description: '',
	})

	const handleSubmit = (e) => {
		e.preventDefault()

		if (description.trim().length >= 1) {
			const newTodo = {
				id: new Date().getTime(),
				desc: description,
				done: false,
			}

			handleAddTodo(newTodo)

			reset()
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				className='form-control'
				placeholder='Nueva tarea'
				autoComplete='off'
				value={description}
				onChange={habldeInputChange}
				name='description'
			/>
			<button
				type='submit'
				className='btn btn-success mt-2 px-5 mb-4 d-block ml-auto'
			>
				Agregar
			</button>
		</form>
	)
}

TodoAdd.prototypes = {
	handleAddTodo: PropTypes.func.isRequired,
}
