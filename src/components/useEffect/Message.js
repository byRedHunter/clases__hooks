import React, { useEffect } from 'react'

const Message = () => {
	useEffect(() => {
		const mouseMove = (e) => {
			const coors = { x: e.x, y: e.y }
			console.log(coors)
		}
		window.addEventListener('mousemove', mouseMove)
		return () => {
			window.removeEventListener('mousemove', mouseMove)
		}
	}, [])

	return (
		<div className='container text-center'>
			<h3>Eres genial!!!</h3>
		</div>
	)
}

export default Message
