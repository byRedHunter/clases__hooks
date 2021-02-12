import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
	const { setUser } = useContext(UserContext)

	return (
		<div className='container py-4'>
			<h1 className='h3 text-center'>Loguin Screen</h1>
			<hr />
			<button
				className='btn btn-success'
				onClick={() =>
					setUser({
						id: 958642,
						name: 'Jhonny Quispe',
						email: 'jhonny.quispejl@gmail.com',
					})
				}
			>
				Login
			</button>
		</div>
	)
}
