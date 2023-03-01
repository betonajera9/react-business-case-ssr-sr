import { RouterProvider } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import './styles/App.scss'

import { router } from './router'

function App() {
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
