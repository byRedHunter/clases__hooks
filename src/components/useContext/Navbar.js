import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<Link to='/' className='navbar-brand'>
				Home
			</Link>

			<ul className='navbar-nav mr-auto flex-row ml-auto'>
				<li className='nav-item ml-2'>
					<NavLink exact activeClassName='active' className='nav-link' to='/'>
						Home
					</NavLink>
				</li>
				<li className='nav-item ml-2'>
					<NavLink
						exact
						activeClassName='active'
						className='nav-link'
						to='/about'
					>
						About
					</NavLink>
				</li>
				<li className='nav-item ml-2'>
					<NavLink
						exact
						activeClassName='active'
						className='nav-link'
						to='/login'
					>
						Login
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
