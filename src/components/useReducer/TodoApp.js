import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'

import './todoApp.css'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const init = () => {
	/* return [
		{
			id: new Date().getTime(),
			desc: 'Aprender React',
			done: false,
		},
	] */

	// obtiene del localstorage y si no existe devuelve un arreglo vacio
	return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init)

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const handleDelete = (todoId) => {
		const action = {
			type: 'delete',
			payload: todoId,
		}

		dispatch(action)
	}

	const handleToggle = (todoId) => {
		dispatch({
			type: 'toggle',
			payload: todoId,
		})
	}

	const handleAddTodo = (newTodo) => {
		dispatch({
			type: 'add',
			payload: newTodo,
		})
	}

	return (
		<div className='container py-4'>
			<h1 className='h3 text-center'>TodoApp ({todos.length})</h1>
			<hr />

			<TodoAdd handleAddTodo={handleAddTodo} />

			<TodoList
				todos={todos}
				handleToggle={handleToggle}
				handleDelete={handleDelete}
			/>
		</div>
	)
}
