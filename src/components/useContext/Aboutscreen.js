import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const Aboutscreen = () => {
	const { setUser } = useContext(UserContext)

	return (
		<div className='container py-4'>
			<h1 className='h3 text-center'>about Screen</h1>
			<hr />
			<button className='btn btn-danger' onClick={() => setUser({})}>
				LogOut
			</button>
		</div>
	)
}
