import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'

import { Episode } from '../providers/api/models/Episode'

export function EpisodeTile(episode: Episode) {
	return (
		<Col md='6' className='episode-tile' key={episode.id}>
			<div className='container'>
				<div className='info'>
					<span>
						{episode.episode} - {episode.name}
					</span>
					<span>
						<small>Air date:</small>
					</span>
					<span>{episode.air_date}</span>
					<Link to={`/episode/${episode.id}`}>
						<Button variant='outline-secondary'>Open detail</Button>
					</Link>
				</div>
			</div>
		</Col>
	)
}
