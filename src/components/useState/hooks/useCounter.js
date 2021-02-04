import { useState } from 'react'

export const useCounter = (state = 100) => {
	const [counter, setCounter] = useState(state)

	const increse = (factor = 1) => {
		setCounter(counter + factor)
	}

	const decrese = (factor = 1) => {
		setCounter(counter - factor)
	}

	const reset = () => {
		setCounter(state)
	}

	return {
		counter,
		increse,
		decrese,
		reset,
	}
}
