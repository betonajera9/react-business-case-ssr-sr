import { createBrowserRouter } from 'react-router-dom'
import { CharactersList, EpisodesList, EpisodeDetail } from './pages'

export const router = createBrowserRouter([
	{ path: '/', element: <CharactersList /> },
	{ path: '/characters', element: <CharactersList /> },
	{ path: '/episodes', element: <EpisodesList /> },
	{ path: '/episode/:id', element: <EpisodeDetail /> },
])
