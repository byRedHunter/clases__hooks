import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
	const { user } = useContext(UserContext)

	return (
		<div className='container py-4'>
			<h1 className='h3 text-center'>Home Screen</h1>
			<hr />

			<pre>{JSON.stringify(user, null, ' ')}</pre>
		</div>
	)
}
